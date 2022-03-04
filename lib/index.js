const React = require('react')
const ReactDOMServer = require('react-dom/server');
const {readdirSync, readFile} = require('fs')
const {resolve, basename, extname} = require('path')

const files = readdirSync(resolve(__dirname, '../transform'))

function renderToString(Component) {
  return ReactDOMServer.renderToString(React.createElement(Component));
}

for (const file of files) {
  if (file.endsWith('.js')) {
    const extension = extname(file)
    const name = basename(file, extension)

    readFile(resolve(__dirname, '../transform/' + file), 'utf8', (err, data) => {

      // console.error(data)

      console.log(file, typeof renderToString(
          React.createElement(data)
        )
      )
    })

    /*
    rename(
      resolve(__dirname, '../transform/' + file),
      resolve(__dirname, '../result' + '/' + name + '.jsx'),
      err => console.error(err)
      */
  }
}

