import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@mui/material/Zoom";

const CreateArea = (props) => {
	const [isExpended, setIsExpended] = useState(false);
	const [notes, setNotes] = useState({
		title: "",
		content: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNotes((prevNote) => {
			return { ...prevNote, [name]: value };
		});
	};

	const handleClick = (e) => {
		props.onAdd(notes);
		setNotes({
			title: "",
			content: "",
		});
		e.preventDefault();
	};

	const expand = () => {
		setIsExpended(true);
	};

	return (
		<div>
			<form className="create-note">
				{isExpended ? (
					<input
						onChange={handleChange}
						name="title"
						placeholder="Title"
						value={notes.title}
					/>
				) : null}
				<textarea
					onChange={handleChange}
					onClick={expand}
					name="content"
					placeholder="Take a note..."
					value={notes.content}
					rows={isExpended ? 3 : 1}
				/>
				<Zoom in={isExpended}>
					<Fab onClick={handleClick}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
};

export default CreateArea;
