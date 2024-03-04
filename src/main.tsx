import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./common/ui/GlobalStyle.tsx";
import IconLoader from "./common/ui/assets/IconLoader.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<GlobalStyle />
		<IconLoader />
		<App />
	</React.StrictMode>
);
