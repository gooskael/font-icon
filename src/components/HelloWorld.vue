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
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
