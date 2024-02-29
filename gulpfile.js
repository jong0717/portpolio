const gulp = require('gulp'),
    concat = require('gulp-concat'),
    // 분리된 파일 합치는거

    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass')(require('node-sass')),
    sourcemaps = require('gulp-sourcemaps'),
    // 개발자코드에서 최종 CSS 말고 원래 파일위치 찍히게 해주는거

    gcmq = require('gulp-group-css-media-queries');
//미디어쿼리 하나로 합치기

// gulp.task('sass:compile', function () {
//     return gulp
//         .src(['./css/common/sass/common.scss'])
//         .pipe(sass().on('error', sass.logError))
//         .pipe(concat('common.css'))
//         .pipe(gcmq())
//         .pipe(cleanCSS())
//         .pipe(gulp.dest('css/common'))
// });

gulp.task('sass_marry:compile', function () {
    return gulp
        .src(['./css/marry/src/sass/common_marry.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('common_marry.css'))
        .pipe(gcmq())
        .pipe(cleanCSS())
        .pipe(gulp.dest('css/marry/src/sass'));
});

gulp.task('sass_noble:compile', function () {
    return gulp
        .src(['./css/marry/noblesse/src/sass/common_noblesse.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('common_noblesse.css'))
        .pipe(gcmq())
        .pipe(cleanCSS())
        .pipe(gulp.dest('css/marry/noblesse/src/sass'));
});

gulp.task('sass_gift:compile', function () {
    return gulp
        .src(['./css/marry/giftshop/src/sass/common_giftshop.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('common_giftshop.css'))
        .pipe(gcmq())
        .pipe(cleanCSS())
        .pipe(gulp.dest('css/marry/giftshop/src/sass'));
});

gulp.task('sass_commu:compile', function () {
    return gulp
        .src(['./css/marry/community/src/sass/common_community.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('common_community.css'))
        .pipe(gcmq())
        .pipe(cleanCSS())
        .pipe(gulp.dest('css/marry/community/src/sass'));
});

gulp.task('sass_market:compile', function () {
    return gulp
        .src(['./css/marry/market/src/sass/common_market.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('common_market.css'))
        .pipe(gcmq())
        .pipe(cleanCSS())
        .pipe(gulp.dest('css/marry/market/src/sass'));
});

gulp.task('sass_member:compile', function () {
    return gulp
        .src(['./css/member/src/sass/common_member.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('common_member.css'))
        .pipe(gcmq())
        .pipe(cleanCSS())
        .pipe(gulp.dest('css/member/src/sass'));
});

gulp.task('sass_recruit:compile', function () {
    return gulp
        .src(['./css/recruit/src/sass/common_recruit.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('common_recruit.css'))
        .pipe(gcmq())
        .pipe(cleanCSS())
        .pipe(gulp.dest('css/recruit/src/sass'));
});

gulp.task('sass_manager:compile', function () {
    return gulp
        .src(['./css/manager/src/sass/common_manager.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('common_manager.css'))
        .pipe(gcmq())
        .pipe(cleanCSS())
        .pipe(gulp.dest('css/manager/src/sass'));
});

// global jsp version gulp (sass)
gulp.task('sass_global:compile', function () {
    return gulp
        .src(['./css/global/src/sass/common_global.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('common_global.css'))
        .pipe(gcmq())
        .pipe(cleanCSS())
        .pipe(gulp.dest('css/global/src/sass'));
});

// gulp.task('sass:watch', function () {
//     gulp.watch('./css/common/sass/*.scss', gulp.series(['sass:compile']));
// });

// gulp.task('sass', gulp.series('sass:compile', 'sass:watch'));
// 저장하면 실시간으로 gulp 돌려주는거

gulp.task('marry', () => {
    return (
        gulp
            .src(['css/marry/font.css', 'css/marry/src/sass/*.css', 'css/marry/src/*.css'])
            .pipe(concat('marry.css'))
            // .pipe(gcmq())
            .pipe(cleanCSS())
            .pipe(gulp.dest('css/marry'))
    );
});

gulp.task('noble', () => {
    return (
        gulp
            .src(['css/marry/font.css', 'css/marry/noblesse/src/sass/*.css', 'css/marry/noblesse/src/*.css'])
            .pipe(concat('noblesse.css'))
            // .pipe(gcmq())
            .pipe(cleanCSS())
            .pipe(gulp.dest('css/marry'))
    );
});

gulp.task('gift', () => {
    return (
        gulp
            .src(['css/marry/font.css', 'css/marry/giftshop/src/sass/*.css', 'css/marry/giftshop/src/*.css'])
            .pipe(concat('giftshop.css'))
            // .pipe(gcmq())
            .pipe(cleanCSS())
            .pipe(gulp.dest('css/marry'))
    );
});

gulp.task('commu', () => {
    return (
        gulp
            .src(['css/marry/font.css', 'css/marry/community/src/sass/*.css', 'css/marry/community/src/*.css'])
            .pipe(concat('community.css'))
            // .pipe(gcmq())
            .pipe(cleanCSS())
            .pipe(gulp.dest('css/marry'))
    );
});

gulp.task('market', () => {
    return (
        gulp
            .src(['css/marry/font.css', 'css/marry/market/src/sass/*.css', 'css/marry/market/src/*.css'])
            .pipe(concat('market.css'))
            // .pipe(gcmq())
            .pipe(cleanCSS())
            .pipe(gulp.dest('css/marry'))
    );
});

gulp.task('member', () => {
    return (
        gulp
            .src(['css/member/font.css', 'css/member/src/sass/*.css', 'css/member/src/*.css'])
            .pipe(concat('member.css'))
            // .pipe(gcmq())
            .pipe(cleanCSS())
            .pipe(gulp.dest('css/member'))
    );
});

gulp.task('recruit', () => {
    return (
        gulp
            .src(['css/recruit/font.css', 'css/recruit/src/sass/*.css', 'css/recruit/src/*.css'])
            .pipe(concat('recruit.css'))
            // .pipe(gcmq())
            .pipe(cleanCSS())
            .pipe(gulp.dest('css/recruit'))
    );
});

// global jsp version gulp
// gulp.task('global', () => {
//     return (
//         gulp
//             .src(['css/global/font.css', 'css/global/src/sass/*.css', 'css/global/src/*.css'])
//             .pipe(sourcemaps.init())
//             .pipe(concat('global.css'))
//             // .pipe(gcmq())
//             .pipe(cleanCSS())
//             .pipe(sourcemaps.write())
//             .pipe(gulp.dest('css/global'))
//     );
// });

gulp.task('noble:watch', function () {
    gulp.watch(['css/marry/noblesse/src/sass/*.css', 'css/marry/noblesse/src/*.css'], gulp.series(['noble']));
});

// global next.js version gulp
gulp.task('global', () => {
    return gulp
        .src(['./css/global/src/sass/common_global.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('common_global.css'))
        .pipe(gcmq())
        .pipe(cleanCSS())
        .pipe(gulp.dest('css/global/src/sass'));
});

gulp.task('store', function () {
    return gulp
        .src(['./css/store/src/sass/common_store.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('common_store.css'))
        .pipe(gcmq())
        .pipe(cleanCSS())
        .pipe(gulp.dest('css/store/src/sass'));
});

gulp.task('manager', () => {
    return (
        gulp
            .src(['css/manager/font.css', 'css/manager/src/sass/*.css', 'css/manager/src/*.css'])
            .pipe(concat('manager.css'))
            // .pipe(gcmq())
            .pipe(cleanCSS())
            .pipe(gulp.dest('css/manager'))
    );
});

gulp.task('noble:watch', function () {
    gulp.watch(['css/marry/noblesse/src/sass/*.css', 'css/marry/noblesse/src/*.css'], gulp.series(['noble']));
});

gulp.task(
    'default',
    gulp.series('sass_marry:compile', 'marry', 'sass_commu:compile', 'commu', 'sass_gift:compile', 'gift')
);
//'sass_noble:compile', 'noble', 'sass_market:compile', 'market',

gulp.task(
    'member',
    gulp.series('sass_member:compile', 'member')
);

gulp.task(
    'recruit',
    gulp.series('sass_recruit:compile', 'recruit')
);

gulp.task(
    'manager',
    gulp.series('sass_manager:compile', 'manager')
);
// global next.js version gulp
// gulp.task(
//     'global',
//     gulp.series('sass_global:compile', 'global')
// );

