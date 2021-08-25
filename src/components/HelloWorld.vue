<template>
  <div>
    <!-- iconfont -->
    <!-- <i class="iconfont icon-dianzan"></i> -->
    <!-- <span class="iconfont icon-dianzan size-change"></span>
    <i class="iconfont icon-icon-test"></i> -->
    <!-- <i class="iconfont icon-iconfonticon-baobia"></i> -->
    <!-- <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-dianzan_huaban1"></use>
    </svg> -->

    <!-- font-family -->
    <!-- <h1 class="sans-font"> {{ msg }} </h1>
    <h1 class="sc-sans-font"> {{ msg }} </h1>
    <h1 class="k-sans-font"> {{ msg }} </h1>
    <h1>{{ msg }}</h1>
  
    <p class="sans-font">
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
    </p>
    <p class="sc-sans-font">
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
    </p>
    <p class="k-sans-font">
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
    </p>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
    </p>
    <p class="sans-font">
      这里尝试打一些中文的字体 完美氪电子科技
    </p>
    <p class="sc-sans-font">
      这里尝试打一些中文的字体 完美氪电子科技
    </p>
    <p class="k-sans-font">
      这里尝试打一些中文的字体 完美氪电子科技
    </p>
    <p class="source-sans-font">
      这里尝试打一些中文的字体 完美氪电子科技&Theta;
    </p>
    <p>
      这里尝试打一些中文的字体 完美氪电子科技&frac34;
    </p> -->

    <button @click="confirmFunc">click</button>
    <button>version 1</button>
    <button>version 2</button>
  </div>
</template>

<script>
// import debounce from 'lodash/debounce';
// import throttle from 'lodash/throttle';
// import axios from "axios"
import EventBus from '../utils/bus.js';
export default {
  name: 'HelloWorld',
  inject: ['parentData'],
  props: {
    msg: String
  },
  data() {
    // this.selecteP = debounce(this.selecteP, 1000, { leading: true, trailing: true });
    // this.selecteP = throttle(this.selecteP, 1000, { leading: true, trailing: true });
    return {
      sonTitle: 'this is son title',
    }
  },
  methods: {
    selecteP() {
      // let ps = document.querySelectorAll('p');
      // let psArray = Array.from(ps);
      // // console.log(ps, 'ps');
      // // console.log(psArray[0], 'psArray');
      // let arr = [ , 'a', 'b', ];
      // let arr1 = new Array(3);
      // console.log(arr1, 'arr1');
      // console.log(arr.length, 'len');
      // console.log(arr.copyWithin(2,0), 'copy');

    
      // Mock.mock(template)
      // const Mock = require('mockjs');
      // const template = {
      //   // 'list|1-10': [{
      //   //   'id|+2': 1
      //   // }],
      //   'name': '@cname'
      // };
      // const template1 = {
      //   'date': '@date'
      // }
      // let data = Mock.mock(template1);
      // console.log(data);
      // let validData = Mock.valid(template, data);
      // console.log(validData);

      // const Mock = require('mockjs');
      // let data = Mock.mock({
      //   'list|1-10': [{
      //     'id|+1': 1
      //   }]
      // })
      // console.log(data);

      // const url = '/mock/mocksomething';
      // this.$axios.get(url).then((res) => {
      //   console.log(res, 'check res');
      // }).catch((res) => {
      //   console.log('wrong!');
      // })

      // debounce & throttle check
      console.log(new Date());
    },

    async check1() {
      throw new Error('err');
      // return 'hey!';
    },

    async checkAsync() {
      let result = 'default';
      try {
        const result = await this.check1();
      } catch {
        console.log(result, 'check await value-type');
      }
    },

    testBreak() {
      const arr = [1, 2, 3, 4];

      // forEach
      // arr.forEach((el) => {
      //   console.log(`before each ${el}`);
      //   if(el > 2) {
      //     return ;
      //   }
      //   console.log(`after each ${el}!!`);
      // })

      // map
      // arr.map(async (el) => {
      //   let value = await this.check1().catch(() => {
      //     value = undefined;
      //   });
      //   if(value === undefined) return;
      //   // 下面处理非failed的正常行为
      //   console.log(`after map ${el}!!!!`);
      // })

      // switch如果不使用break会继续往前找符合条件的case
      // let num = 25;
      // switch(num) {
      //   case 25:
      //     console.log(`check ${num}`);
      //   default:
      //     console.log(`default!`);
      // }

      // `break` 只会结束一层for，不会结束外层嵌套的for
      // for(let i = 0; i < 3; i++) {
      //   for(let j = 0; j < 3; j++) {
      //     if(j > 2) break;
      //     console.log(`i: ${i}; j: ${j}`);
      //   }
      // }
    },

    getParent() {
      console.log(this.$parent);
    },

    emitBus() {
      console.log(this.parentData);
      EventBus.$emit('emitBus', 'this emit a method');
    },

    confirmFunc() {
      this.$confirm({
        title: '确定',
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.size-change {
  font-size: 40px;
  color: orange;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
