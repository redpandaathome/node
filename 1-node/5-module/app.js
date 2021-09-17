// check this out next time!
// named export (non-default) -> {}, {increase as IC, getCount}
// default export -> whatever name you want: import whatever from~
//https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import

// import {increase, getCount} from './counter.js'

// increase()
// console.log(getCount())

import * as counter from './counter.js'

counter.increase()
console.log(counter.getCount())