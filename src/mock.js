import Mock from 'mockjs';

const template = {
  // "mtime": "@datetime",//随机生成日期时间
  // "score|1-800": 800,//随机生成1-800的数字
  // "rank|1-100": 100,//随机生成1-100的数字
  // "stars|1-5": 5,//随机生成1-5的数字
  "nickname": "@cname",//随机生成中文名字
  "first": "@first",
  "last": "@last",
  "full": "@first @last",
  'array|2-4': [1, 2, 3, 4]
}

// Mock.mock( rurl, template)
// Mock.mock('/mock/mocksomething', template)


// Mock.mock( rurl, rtype, template)
// Mock.mock('/mock/mocksomething', /post|get/i, template)
// Mock.mock(/\/mock\/mocksomething/, /post|get/i, template)


const Random = Mock.Random;
const getData = () => {
  // let fullname = Random.name();
  return {
    fullname: Random.name()
  }
}
// Mock.mock( rurl, rtype, function)
Mock.mock('/mock/mocksomething', getData)
