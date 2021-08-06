<template>
  <div>
    <!-- iconfont -->
    <!-- <i class="iconfont icon-dianzan"></i> -->
    <span class="iconfont icon-dianzan size-change"></span>
    <i class="iconfont icon-icon-test"></i>
    <!-- <i class="iconfont icon-iconfonticon-baobia"></i> -->
    <!-- <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-dianzan_huaban1"></use>
    </svg> -->

    <!-- font-family -->
    <h1 class="sans-font"> {{ msg }} </h1>
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
    </p>

    <button @click="selecteP">click</button>
  </div>
</template>

<script>
// import debounce from 'lodash/debounce';
// import throttle from 'lodash/throttle';
// import axios from "axios"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    // this.selecteP = debounce(this.selecteP, 1000, { leading: true, trailing: true });
    this.selecteP = throttle(this.selecteP, 1000, { leading: true, trailing: true });
    return {

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
