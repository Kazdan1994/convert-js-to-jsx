const { readdirSync, rename } = require('fs')
const { resolve, basename, extname } = require('path')

const files = readdirSync(resolve(__dirname, '../transform'))

for (const file of files) {
  if (file.endsWith('.js')) {
    const extension = extname(file)
    const name = basename(file, extension)

    rename(
      resolve(__dirname, '../transform/' + file),
      resolve(__dirname, '../result' + '/' + name + '.jsx'),
      err => {
        console.log(err)
      })
  }
}
