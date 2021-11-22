import Notes from "./Notes";

const Footer = () => {
	const footerStyle = {
		color: "green",
		fontStyle: "italic",
		fontSize: 16,
	};
	return (
		<div style={footerStyle}>
			<br />
			<em>
				Note app, Department of Computer Science, University of Helsinki
				2021
			</em>
		</div>
	);
};

const App = () => {
	return (
		<div className="App">
			<Notes />
			<Footer />
		</div>
	);
};

export default App;
