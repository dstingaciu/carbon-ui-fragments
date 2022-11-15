import "carbon-components/css/carbon-components.css";

import React, { useState } from "react";

import { FragmentComponent } from "./component.js";
import ReactDOM from "react-dom";

const App = () => {
	const [state, setState] = useState({});

	return (
		<div>
			<FragmentComponent state={state} setState={setState} />
		</div>
	);
};
ReactDOM.render(<App />, document.getElementById("root"));
