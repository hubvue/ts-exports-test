import { Type, Math } from '@cckim/ts-exports-test'
import { type } from '@cckim/ts-exports-test/type'
import { getUA } from '@cckim/utils/env'

console.log(Type.type(123))
console.log(Math.add(1, 2))
console.log(type(2345))
console.log(getUA())
