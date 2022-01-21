const {src, dest} = require('gulp')


//html task
const htmlMin = require('gulp-htmlmin')
function htmlTask (){
    return src("src/html/*.html")
    .pipe(htmlMin({collapseWhitespace:true,removeComments:true}))
    .pipe(dest("dist/assets"))
}

exports.html = htmlTask


//img task
const imgMin = require('gulp-imagemin')
function imgTask (){
    return src("src/images/*")
    .pipe(imgMin()) 
    .pipe(dest("dist/images"))
}

exports.img = imgTask


//css task
const concatCss = require('gulp-concat')
const cssMin = require('gulp-clean-css')
function cssTask (){
    return src("src/scss/*.css")
    .pipe(concatCss("style.min.css"))
    .pipe(cssMin())
    .pipe(dest("dist/assets"))
    
}
exports.css = cssTask


//js task
const concatJs = require('gulp-concat')
const jsMin = require('gulp-terser')
function jsTask (){
    return src("src/js/*.js")
    .pipe(concatJs("script.min.js"))
    .pipe(jsMin())
    .pipe(dest("dist/assets"))
    
}
exports.js = jsTask