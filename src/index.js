import * as React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Done from "./pages/Done";

function App({ Component }) {
	return (
		<ChakraProvider>
			<Done />
		</ChakraProvider>
	);
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
