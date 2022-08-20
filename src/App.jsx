import { useState } from "react";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import { v4 as uuidv4 } from "uuid";

import "./styles.css";

const App = () => {
	const [newNote, setNewNote] = useState([]);

	const addItem = (notes) => {
		setNewNote((prevNote) => {
			return [...prevNote, notes];
		});
	};

	const deleteItem = (id) => {
		setNewNote((prevNote) => {
			return prevNote.filter((noteItem, index) => {
				return index !== id;
			});
		});
	};

	return (
		<div>
			<Header />
			<CreateArea onAdd={addItem} />
			{newNote.map((noteItem, index) => {
				return (
					<Note
						key={uuidv4()}
						id={index}
						title={noteItem.title}
						content={noteItem.content}
						onDelete={deleteItem}
					/>
				);
			})}
			<Footer />
		</div>
	);
};

export default App;
