<template>
  <div>
    <div>props name is: {{ name }}</div>
    count: {{ count }}
    <div>
      <button @click="add">+1</button>
    </div>
    <div>{{ obj.name }}</div>
    <div>{{ double }}</div>
    <p>当前路由：{{ currentRoute }}</p>
    <div>
      <button>获取当前路由</button>
      <button @click="changeRoute">切换路由</button>
    </div>
    <div>当前时间：{{ nowTime }}</div>
  </div>
</template>

<script>
import {
  ref, reactive, watchEffect, computed, getCurrentInstance,
} from 'vue';

export default {
  props: {
    name: String,
  },
  setup(props) {
    // 定义变量
    const count = ref(0);
    const obj = reactive({ name: 'Tab' });
    // console.log(props.name);
    // router
    const currentRoute = ref('');

    // methods
    const add = () => {
      count.value += 1;
    };

    // computed
    const double = computed(() => count.value * 2);

    // watch
    watchEffect(() => {
      console.log('watch', props.name);
    });

    // get router
    const { ctx } = getCurrentInstance();
    currentRoute.value = ctx.$router.currentRoute.value.path;
    const changeRoute = () => {
      ctx.$router.push('/about');
    };

    // vuex
    const nowTime = computed(() => ctx.$store.state.time);

    return {
      count,
      add,
      obj,
      double,
      currentRoute,
      changeRoute,
      nowTime,
    };
  },
};
</script>
