import { Routes, Route } from "react-router-dom";
import useToken from "../../services/TokenService";
import Navigation from "../../shared/Navigation";
import Login from "../Login";

const Home = () => <h1>Home</h1>;
const Notes = () => <h1>Notes</h1>;
const Note = () => <h1>Note</h1>;
const NewNote = () => <h1>New Note</h1>;
const Users = () => <h1>Users</h1>;

const App = () => {
	const { token } = useToken();

	if (!token) {
		return <Login />;
	}

	return (
		<div className="wrapper">
			<Navigation />
			<h1>Application</h1>
			<Routes>
				<Route path="notes" element={<Notes />}>
					<Route path=":noteId" element={<Note />} />
					<Route path="new" element={<NewNote />} />
				</Route>
				<Route path="users" element={<Users />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;
