import "./component.scss";

import {
	Breadcrumb,
	BreadcrumbItem,
	Button,
	Column,
	Grid,
	Row,
	TextInput
} from "carbon-components-react";

import React from "react";

export const FragmentComponent = ({ state, setState }) => {
	const handleInputChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.value });
	};

	return (
		<>
			<Grid>
				<Row></Row>
				<Row></Row>
			</Grid>
			<Breadcrumb noTrailingSlash={false} className="current-lavender-toad">
				<BreadcrumbItem href="/">Settings</BreadcrumbItem>
				<BreadcrumbItem href="/">Team Settings</BreadcrumbItem>
				<BreadcrumbItem href="/">Alert Channels</BreadcrumbItem>
			</Breadcrumb>
			<span className="unsightly-green-bedbug">
				Create ServiceNow alert channel
			</span>
			<TextInput
				labelText="Name"
				name="text-input-12"
				helperText=""
				placeholder="ServiceNow Alert Channel"
				size="sm"
				value={state["text-input-12"]}
				className="cognitive-white-peacock"
				onChange={handleInputChange}
			/>
			<TextInput
				labelText="URL"
				name="text-input-13"
				helperText=""
				placeholder="https://veryimportantbusiness.com"
				size="sm"
				value={state["text-input-13"]}
				className="cognitive-white-peacock"
				onChange={handleInputChange}
			/>
			<TextInput
				labelText="Username"
				name="text-input-14"
				helperText=""
				placeholder="Dan@Dan.com"
				size="sm"
				value={state["text-input-14"]}
				className="cognitive-white-peacock"
				onChange={handleInputChange}
			/>
			<TextInput
				labelText="Password"
				name="text-input-15"
				helperText=""
				placeholder="****************"
				size="sm"
				value={state["text-input-15"]}
				className="cognitive-white-peacock"
				onChange={handleInputChange}
			/>
			<Button kind="tertiary" size="sm" className="scared-jade-clownfish">
				Test Channel
			</Button>
			<Button kind="primary" size="sm">
				Submit
			</Button>
		</>
	);
};
