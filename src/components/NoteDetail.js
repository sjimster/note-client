import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const NoteDetail = () => {
	const id = useParams().id;
	const note = useSelector((state) => state.notes.find((n) => n.id === id));
	console.log(note);
	if (!note) return null;
	return (
		<div>
			<h2>{note.content}</h2>
			<div>{note.user.name}</div>
			<div>
				<strong>{note.important ? "important" : ""}</strong>
			</div>
		</div>
	);
};

export default NoteDetail;
