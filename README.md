# gulp-ts2php
![Language](https://img.shields.io/badge/-TypeScript-blue.svg)
[![Build Status](https://travis-ci.org/searchfe/gulp-ts2php.svg?branch=master)](https://travis-ci.org/searchfe/gulp-ts2php)
[![npm package](https://img.shields.io/npm/v/gulp-ts2php.svg)](https://www.npmjs.org/package/gulp-ts2php)
[![npm downloads](http://img.shields.io/npm/dm/gulp-amd-wrap.svg)](https://www.npmjs.org/package/gulp-amd-wrap)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

gulp-ts2php是一个调用ts2php将ts文件转化为php的gulp插件

## Install

```bash
npm i gulp-ts2php--save-dev
```

## Example

```Typescript
const ts2php = require('gulp-ts2php').ts2php;
const ts2phpConfig = require('./ts2phprc');

gulp.task('build:php', function () {
    return gulp.src(['src/index.ts'])
        .pipe(ts2php(ts2phpConfig))
        .pipe(gulp.dest('dist'));
});

```
