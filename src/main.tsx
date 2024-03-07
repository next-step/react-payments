import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./common/ui/GlobalStyle.tsx";
import IconSprites from "./common/ui/assets/IconSprites.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<GlobalStyle />
		<IconSprites />
		<App />
	</React.StrictMode>
);
