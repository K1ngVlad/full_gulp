import webp from "gulp-webp";
import imagemin from "gulp-imagemin";
import fs from 'fs';

const dirFiles = fs.readdirSync('src/components/');
let packIMGFile = [];
let packSVGfile = [];

dirFiles.forEach(dir => {
	const dirFile = fs.readdirSync(`src/components/${dir}`);

	for (const src of dirFile) {
		if (src.includes(`assess`)) {
			packIMGFile.push(`src/components/${dir}/assess/*.{jpg,jpeg,png,gif,webp}`);

			const svgDir = fs.readdirSync(`src/components/${dir}/assess/`);
			if (svgDir[0]) {
				packSVGfile.push(`src/components/${dir}/assess/svg/*.svg`);
			}

		}
	}

});

export const images = () => {

	let img = app.gulp.src(packIMGFile)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "IMAGES",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(
			app.plugins.if(
				app.isBuild,
				webp()
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				app.gulp.dest(app.path.build.images)
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				app.gulp.src(packIMGFile)
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				app.plugins.newer(app.path.build.images)
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				imagemin({
					progressive: true,
					svgoPlugins: [{ removeViewBox: false }],
					interlaced: true,
					optimizationLevel: 3 // 0 to 7
				})
			)
		)
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.plugins.browsersync.stream());

	let svg = app.gulp.src(packSVGfile)
		.pipe(app.gulp.dest(app.path.build.svg))
		.pipe(app.plugins.browsersync.stream());

	return img
}
