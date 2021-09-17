let count = 0;

function increase() {
   count++;
}

function getCount() {
   return count;
}

module.exports.getCount = getCount;
// module.exports.increase = increase;

//module.exports.getCount === exports.getCount in the beginning!
console.log(module.exports === exports ) // SAME
exports = {}
console.log(module.exports === exports ) // NOT SAME ANYMORE

exports.increase = increase;
console.log("🌝",module);

