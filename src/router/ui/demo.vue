<template>
  <div class="wrap page-theme">
    <h1>主题色</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Button} from 'lv-web-ui';
Vue.component('lvButton', Button);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>xxxx</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;script type="text/babel"&gt;
export default {
  data () {
    return {};
  },
  methods: {
    xxx () {}
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          xxx
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  // import {Button} from '../../../packages/index.js';
  
  export default {
    name: 'Theme',
    components: {
      // cmpButton: Button
    },
    data () {
      return {
        // 
      };
    },
    mounted: function () {
      // 
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
