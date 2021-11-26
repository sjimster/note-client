import React from "react";
import { Link } from "react-router-dom";

const Note = ({ note }) => {
	return (
		<li key={note.id}>
			<Link to={`/notes/${note.id}`}>{note.content}</Link>
		</li>
	);
};

export default Note;
