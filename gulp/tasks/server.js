export const server = (done) => {
	console.log(app.path.build);
	app.plugins.browsersync.init({
		server: {
			baseDir:'./dist'
		},
		notify: false,
		port: 3000,
	});
}