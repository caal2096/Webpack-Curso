// Un modulo de node y se encarga de la gestion de rutas

const path = require("path");
// Para exportar un modulo, se debe hacer de la forma commonJS

module.exports = {
	// El archivo que quiere transpilar

	entry: path.resolve(__dirname, "index.js"),
	// El modo de ejecucion

	mode: "development",
	// Configuraciones para el archivo generado por webpack

	output: {
		// La donde quedara el archivo final

		path: path.resolve(__dirname, "dist"),
		//El nombre del archivo final creado

		filename: "bundle.js"
	}
};
