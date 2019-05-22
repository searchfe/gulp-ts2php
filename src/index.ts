import * as gutil from 'gulp-util';
import replaceExt = require('replace-ext');
import * as through from 'through2';
import { compile, Ts2phpOptions } from 'ts2php';

export function ts2php(opt: Ts2phpOptions) {
    return through.obj(function(file, enc, cb) {
        console.log(file.path)
        file.contents = new Buffer(compile(file.path, opt).phpCode);
        file.path = replaceExt(file.path, '.php');
        this.push(file);
        cb();
    });
}
