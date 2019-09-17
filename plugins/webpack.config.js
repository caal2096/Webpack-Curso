// Un modulo de node y se encarga de la gestion de rutas

const path = require("path");

// Para importar Plugin
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// Para exportar un modulo, se debe hacer de la forma commonJS

module.exports = {
	// El archivo que quiere transpilar

	entry: path.resolve(__dirname, "src/js/index.js"),

	// El modo de ejecucion

	mode: "development",
	// Configuraciones para el archivo generado por webpack

	output: {
		// La donde quedara el archivo final

		path: path.resolve(__dirname, "dist"),
		//El nombre del archivo final creado

		filename: "js/[name].js"
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					{
						loader: MiniCSSExtractPlugin.loader
					},
					"css-loader"
				]
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: "Plugins"
		}),

		new MiniCSSExtractPlugin({
			filename: "css/[name].css"
		})
	]
};
