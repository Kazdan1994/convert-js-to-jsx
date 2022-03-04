const { promises: { readFile }} = require("fs");
const {resolve} = require("path");

function hasJSX(file) {
  return file === resolve(__dirname, '../transform/file.js')
}

it('should return true if file contains jsx', () => {
  expect(hasJSX(resolve(__dirname, '../transform/file.js'))).toBeTruthy()
})

it('should return false if file does not contains jsx', () => {
  expect(hasJSX(resolve(__dirname, '../transform/jsx.js'))).toBeFalsy()
})
