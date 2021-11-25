import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeNotes } from "../store/reducers/noteReducer";
import Note from "./Note";

const Notes = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initializeNotes());
	}, [dispatch]);

	const notes = useSelector(({ filter, notes }) => {
		if (filter === "ALL") {
			return notes;
		}
		return filter === "IMPORTANT"
			? notes.filter((note) => note.important)
			: notes.filter((note) => !note.important);
	});

	return (
		<ul>
			{notes.map((note) => (
				<Note key={note.id} note={note} />
			))}
		</ul>
	);
};

export default Notes;
