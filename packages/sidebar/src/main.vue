<template>
  <transition name="slide-fade-sidebar">
    <div class="wrap-aside" v-if="(value !== '')" v-show="(value + '' === 'true')" :style="{'z-index': zIndex + 1}">
      <header v-if="$slots.title">
        <slot name="title"></slot>
      </header>
      <vperfect-scrollbar class="scroll-area" :style="{height:'calc(100% - '+($slots.title?60:0)+'px - '+($slots.footer?60:0)+'px)'}" :settings="settings" @ps-y-reach-end="handle_scroll('end')" @ps-y-reach-start="handle_scroll('top')">
        <slot name="content"></slot>
      </vperfect-scrollbar>
      <footer v-if="$slots.footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </transition>
</template>


<script type="text/babel">
  import VuePerfectScrollbar from 'vue-perfect-scrollbar';

  export default {
    name: 'Sidebar',
    components: {
      'vperfect-scrollbar': VuePerfectScrollbar
    },
    props: {
      value: {
        default: ''
      },
      // 是否模态，即是否产生遮罩效果
      modal: {
        default: false
      }
    },
    data: function () {
      return {
        id: 'sdb_' + new Date().getTime() + parseInt(Math.random() * 100),
        // 滚动速度，默认1
        settings: {
          wheelSpeed: 0.5
        },
        zIndex: 1000
      };
    },
    watch: {
      value: function (val) {
        if (val + '' === 'true') {
          this.modal + '' === 'true' && this.creatZz();
        } else {
          this.removeZz();
        }
      }
    },
    beforeDestroy: function () {
      window.removeEventListener('keyup', this.evt_keyup, false);
    },
    mounted: function () {
      window.addEventListener('keyup', this.evt_keyup, false);
      console.log(this.$slots);
      console.log('title', this.$slots.title);
      console.log('content', this.$slots.content);
      console.log('footer', this.$slots.footer);
    },
    methods: {
      evt_keyup: function (event) {
        let e = event || window.event;
        let keyCode = e.keyCode;

        if (keyCode === 27 && this.value !== '') {
          this.emt_show(false);
        }
      },
      emt_show: function (type) {
        this.$emit('input', type);
      },
      handle_scroll: function (type) {
        this.$emit('callback_sroll', type);
      },
      creatZz: function () {
        if (this.modal + '' === 'true' && this.value + '' === 'true') {
          var dom = document.createElement('div');

          dom.setAttribute('id', this.id);
          dom.setAttribute('class', 'center-hv');
          dom.setAttribute('style', 'position: fixed;background-color: rgba(0, 0, 0, 0.1);z-index: ' + this.zIndex);
          document.body.appendChild(dom);
        }
      },
      removeZz: function () {
        var dom = document.getElementById(this.id);

        dom && (document.body.removeChild(dom));
      }
    }
  };
</script>

<style scope lang="scss">

  .wrap-aside {
    position: fixed;
    top: 0;
    right: 0;
    width: 400px;
    height: 100%;
    background-color: #fff;
    box-shadow: -2px 0 8px 0 rgba(0, 0, 0, 0.22);

    >header {
      height: 60px;
      line-height: 60px;
      font-size: 16px;
      border-bottom: solid 1px #eee;
    }

    >.scroll-area {
      height: 100%;
      overflow: auto;
    }

    >footer {
      height: 60px;
      line-height: 60px;
      border-top: solid 1px #eee;
      text-align: right;
    }
  }

  .slide-fade-sidebar-enter-active {
    transition: right .3s ease-in;
  }

  .slide-fade-sidebar-leave-active {
    transition: right .3s ease-out;
  }

  .slide-fade-sidebar-enter, .slide-fade-sidebar-leave-to {
    right: -410px;
  }
</style>