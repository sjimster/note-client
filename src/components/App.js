import { Routes, Route, Link } from "react-router-dom";

import Notes from "./Notes";
import Users from "./Users";
import Home from "./Home";
import NoteDetail from "./NoteDetail";

const App = () => {
	return (
		<>
			<div>
				<Link to="/">home</Link>
				<Link to="/notes">notes</Link>
				<Link to="/users">users</Link>
			</div>
			<Routes>
				<Route path="/notes" exact element={<Notes />} />
				<Route path="/notes/:id" element={<NoteDetail />}></Route>
				<Route path="/users" exact element={<Users />} />
				<Route path="/" exact element={<Home />} />
			</Routes>
		</>
	);
};

export default App;
