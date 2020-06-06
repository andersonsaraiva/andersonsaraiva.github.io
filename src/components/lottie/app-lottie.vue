<template>
  <div :style="style" ref="lavContainer"></div>
</template>

<script>
import { TweenMax, Power3, TweenLite } from 'gsap';
import lottie from 'lottie-web';

export default {
  props: {
    options: { type: Object, required: true },
    heightAnimation: { type: String, required: false, default: '100%' },
    widthAnimation: { type: String, required: false, default: '100%' },
    animationOnMouseMove: { type: Boolean, default: false },
    animationReverse: { type: Boolean, default: false }
  },

  data() {
    return {
      style: {
        width: this.widthAnimation !== null && this.widthAnimation,
        height: this.heightAnimation !== null && this.heightAnimation,
        overflow: 'hidden',
        margin: '0 auto',
        pointerEvents: 'none'
      }
    };
  },

  created() {
    window.addEventListener('mousemove', this.move);
  },

  mounted() {
    lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: this.options.json
    });
  },

  destroyed() {
    window.removeEventListener('mousemove', this.move);
  },

  methods: {
    move(e) {
      if (!this.animationOnMouseMove) return;

      const { lavContainer } = this.$refs;

      TweenLite.to(lavContainer, 0.2, {
        x: -((e.clientX - window.innerWidth / 2) / `${this.animationReverse ? -200 : +200}`),
        y: -((e.clientY - window.innerHeight / 2) / `${this.animationReverse ? -200 : +200}`)
      });
    }
  }
};
</script>
