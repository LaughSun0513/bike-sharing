//测速库 -- benchmark
const _ = require('lodash');
const Benchmark = require('benchmark');

var suite = new Benchmark.Suite;
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const obj = {
    a: {
        b: {
            c: {
                d:1
            }
        }
    }
}
// 添加测试
suite.add('deepClone', function () {
    deepClone(obj);
})
.add('lodash', function () {
   _.cloneDeep(obj);
})
// add listeners
.on('cycle', function (event) {
    console.log(String(event.target));
})
.on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });