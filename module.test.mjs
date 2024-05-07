import { assertEquals } from 'https://deno.land/std@0.224.0/assert/mod.ts'
import module from './module.mjs'

Deno.test('url test', () => {
  // const url = new URL('./foo.js', 'https://deno.land/')
  console.log(module)

  assertEquals(module, '🦖 ❤️ NPM')
})
// import { describe, Try } from 'npm:riteway@7.1.0'

// a function to test
const sum = (...args) => {
  if (args.some((v) => Number.isNaN(v))) throw new TypeError('NaN')
  return args.reduce((acc, n) => acc + n, 0)
}
// // const
// describe('sum()', async (assert) => {
//   const should = 'return the correct sum'

//   assert({
//     given: 'no arguments',
//     should: 'return 0',
//     actual: sum(),
//     expected: 0,
//   })

//   assert({
//     given: 'zero',
//     should,
//     actual: sum(2, 0),
//     expected: 2,
//   })

//   assert({
//     given: 'negative numbers',
//     should,
//     actual: sum(1, -4),
//     expected: -3,
//   })

//   assert({
//     given: 'NaN',
//     should: 'throw',
//     actual: Try(sum, 1, NaN).toString(),
//     expected: 'TypeError: NaN',
//   })
// })
