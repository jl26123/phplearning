var webpack = require("webpack");

module.exports = {
	entry: "./src/index.js",
	output:{
		path:"./assets",//bundled file reside
		filename:"bundle.js",
		publicPath:"assets"
	},
	devServer:{//like httpster, 
		//automatically reload as soon as I make any change
		inline:true,
		contentBase:'../',
		port:3000

	}
	module:{
		loaders:[
			{
				test:/\.js$/, //js end
				exclude:/(node_modules)/, // no include
				loader:["babel-loader"],
				query:{
					presets:["latest","stage-0","react"]
				}//any preset you want
			}
		]
	}
}