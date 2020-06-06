const vendors = ["moz", "webkit"];

class AnimationListener {
  constructor() {
    this.listener = null;
    this.items = [];
    this.lastTick = null;
    this.rate = 100;
  }

  register(el, animationConfig) {
    if (!showElement(el, animationConfig)) {
      this.items.push({
        el: el,
        animationConfig: animationConfig
      });

      if (this.listener == null)
        this.registerListener();
    }
  }

  registerListener() {
    this.listener = this.handleScroll.bind(this);
    window.addEventListener("scroll", this.listener);
  }

  unregisterListener() {
    window.removeEventListener("scroll", this.listener);
    this.listener = null;
  }

  handleScroll() {
    let item = null, currentDate = Date.now();

    if (currentDate - this.lastTick >= this.rate) {
      this.lastTick = currentDate;

      for (var i = this.items.length - 1; i >= 0; i--) {
        item = this.items[i];

        if (showElement(item.el, item.animationConfig))
          this.items.splice(i, 1);
      }

      if (this.items.length == 0)
        this.unregisterListener();
    }
  }
}

const getCssVendor = function (element, propertyName) {
  let style = getComputedStyle(element);
  let result = style.getPropertyValue(propertyName);

  if (!result) {
    for (var i = 0; i < vendors.length; i++) {
      if (result = style.getPropertyValue(`-${vendors[i]}-${propertyName}`))
        return result;
    }
  }
  return result;
}

/**
 * Check if the element is visible
 *
 * @param {DOMElementNode} el
 * @return Boolean
*/
const getAnimationName = function (element) {
  return getCssVendor(element, 'animation-name');
}

function isVisible(el) {
  var rect = el.getBoundingClientRect();

  return (
    (rect.top + rect.height) >= 0 &&
    (rect.left + rect.width) >= 0 &&
    (rect.bottom - rect.height) <= ((window.innerHeight || document.documentElement.clientHeight)) &&
    (rect.right - rect.width) <= ((window.innerWidth || document.documentElement.clientWidth))
  );
}

/**
 * Trigger the animation to show the element whether is visible
 *
 * @param {DOMElementNode} el
 * @param {object} animationConfig
 * @return Boolean
*/
const showElement = function (el, animationConfig) {
  if (isVisible(el)) {
    for (name in animationConfig) {
      el.style[name] = animationConfig[name];
    }

    el.style.visibility = "visible";
    return true;
  }

  return false;
};

module.exports = {
  AnimationListener: AnimationListener,
  getAnimationName: getAnimationName,
  isVisible: isVisible,
  showElement: showElement
}
