// var arr = ["ab", "cd", "ef", "ab", "cd"];

// var str = "cdsdf";

// if (arr.indexOf(str) === -1) {

//   console.log("指定元素：" + str + " 不在数组中");

// } else {

//   console.log("指定元素： " + str + " 在数组中");

// }
function deepCopy(obj, cache = []) {
  if (obj === null || typeof obj !== 'object') {
    console.log('object');
      return obj
  }
  const hit = cache.filter(c => c.original === obj)[0]
  if (hit) {
    console.log('hit');
      return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}

  cache.push({
      original: obj,
      copy
  })
  Object.keys(obj).forEach(key => {
    // console.log(obj[key],cache);
      copy[key] = deepCopy(obj[key], cache)
      console.log('key:',obj[key],'catch',cache);
  })
console.log('copy:',copy);
  return copy;
}

// var start = {5:2,6:4};
var start = [[1,2,3],[4,5,6]];
var start_copy=deepCopy(start);
// console.log(obj === null)