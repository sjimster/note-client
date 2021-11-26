import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeNotes } from "../store/reducers/noteReducer";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

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
			<div>
				<h2>Notes</h2>
				<Table striped>
					<tbody>
						{notes.map((note) => (
							<tr key={note.id}>
								<td>
									<Link to={`/notes/${note.id}`}>
										{note.content}
									</Link>
								</td>
								<td>{note.user.name}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</ul>
	);
};

export default Notes;
