<template>
  <div class="d-flex">
    <template v-if="!isMobile">
      <v-tooltip bottom v-for="(item, i) in items" :key="i">
        <template v-slot:activator="{ on }">
          <v-btn icon :href="item.path" target="_blank" v-on="on" :dark="!isScrolling">
            <v-icon v-text="item.icon"></v-icon>
          </v-btn>
        </template>
        <span v-text="item.name"></span>
      </v-tooltip>
    </template>

    <v-menu v-if="isMobile" offset-y :nudge-bottom="10" origin="center center" transition="scroll-y-transition" :max-width="280">
      <template v-slot:activator="{ on }">
        <v-btn :dark="!isScrolling" icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list dense class="menu-social">
        <v-list-item-group v-model="item" color="primary">
          <template v-for="(item, i) in items">
            <v-list-item :key="i" :href="item.path" target="_blank" dense>
              <v-list-item-icon>
                <v-icon v-text="item.icon" color="primary"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider v-if="i + 1 < items.length" :key="item.icon"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import commonMixin from '@/mixins/common';
import networks from '@/api/social-media.json';

export default {
  mixins: [commonMixin],

  props: {
    isScrolling: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  data: () => ({
    item: null,
    items: networks
  })
};
</script>

<style lang="scss" scoped>
.menu-social {
  padding: 0;
  border-bottom: 4px solid var(--v-primary-base);
}

.v-menu__content {
  box-shadow: none;
  padding: 11px 11px 0 11px;

  &:before {
    content: '';
    width: 0;
    height: 0;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 9px solid #fff;
    position: absolute;
    top: 4px;
    left: 77%;
  }
}
</style>
