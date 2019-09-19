import "../css/estilos.css";
import text from "./text.js";

if (module.hot) {
	module.hot.accept("./text.js", function() {
		console.log("recargas");
		text();
	});
}
