# vue-next-js

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### setup()
```
setup(props, context){
  // props: 组件传入props参数
  // context: 上下文对象(attrs、emit、slots)
  // ...
  return {
    // 所有需要用到的变量、函数等都要return出去 
    // ...
  }
}
```

### 定义变量
*ref*,通过.value访问/修改值,适用简单变量
```
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);
    // 通过.value访问
    // count.value += 1
    // console.log(count.value)
    return {
      count
    }
  }
}

// 模板中不需要.value   <div>{{ count }}</div>
```

*reactive*，适用所有类型变量
```
import { reactive } from 'vue'

export default {
  setup() {
    const obj = reactive({ name: 'Tab' });
    // console.log(obj.name);
    // obj.name = 'xx';

    return {
      obj,
    }
  }
}

// 模板使用 {{ obj.name }}
```


### props
setup()函数将props作为第一个参数
```
props: {
  name:String,
},
setup(props) {
  console.log(props.name);
}
```

### methods
setup内声明函数并return即可
```
setup(){
  const count = ref(0);
  // 函数定义
  const add = () => {
    count.value += 1;
  }

  return {
    add,
  }
}
```

### computed
类似于methods，但需要通过computed()来定义
```
import { computed, ref } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const add = () => { count.value += 1; };

    // computed
    const double = computed(() => count.value * 2);

    return {
      count,
      add,
      double
    }
  }
}
```



