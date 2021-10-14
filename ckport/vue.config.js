module.exports = {
  	devServer: {
    //compress: true,
		disableHostCheck: true,
	//overlay: false
	//publicPath: process.env.NODE_ENV === 'production'
	  //? '/cklotte27.github.io/'
	  //: '/',
    //outputDir: 'docs'
	//publicPath: '/cklotte27.github.io', //maybe I need it to make github pages work but I don't think so.
	//outputDir: 'docs'

 	},
	/*css: { // tried using stylus but failed
        loaderOptions: {
            stylus: {
                use: [
                    'vue-style-loader',
    				'css-loader',
    				'stylus-loader'
                ],
            },
        },
	}	
	*/
}