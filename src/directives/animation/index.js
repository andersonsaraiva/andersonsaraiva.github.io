import Vue from 'vue';
import utils from './utils';

let AnimationListener = new utils.AnimationListener();

export const Animation = {
  bind(el, binding) {
    let animateConfig = binding.value || {};

    if (('animation-name' in animateConfig) === false) {
      animateConfig['animation-name'] = utils.getAnimationName(el)
    }

    if (('animation-delay' in animateConfig) === false && el.hasAttribute('data-animation-delay')) {
      animateConfig['animation-delay'] = el.getAttribute('data-animation-delay')
    }

    if (('animation-duration' in animateConfig) === false && el.hasAttribute('data-animation-duration')) {
      animateConfig['animation-duration'] = el.getAttribute('data-animation-duration')
    }

    //Class form Animate.css (this should be an options)
    el.classList.add('animated');
    el.style.visibility = "hidden";
    el.style["animation-name"] = "none";

    AnimationListener.register(el, animateConfig);
  }
};

Vue.directive('animation', Animation)
