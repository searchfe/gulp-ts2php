ts2php = require('./dist/index.js')

const file = {path: '/Users/chaiyanchen/Documents/code/toptip/src/index.ts', push: () => false}
ts2php.compile(file, null, () => {
    console.log(file.contents);
})
