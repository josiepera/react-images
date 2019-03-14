const functions = require('./functions');

test('create an array', () => {
  expect(functions()).toEqual([1,2])
})

// test('Finds the most frequently used char', () => {
//   expect(maxChar('a')).toEqual('a');
//   expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
// });
