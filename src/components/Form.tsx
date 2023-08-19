import { FormEvent, useState } from "react";
type Props = {
	setItems: React.Dispatch<
		React.SetStateAction<
			{
				title: string;
				quantity: number;
				packed: boolean;
				id: number;
			}[]
		>
	>;
};

const Form = ({ setItems }: Props) => {
	const [quantity, setQuantity] = useState(1);
	const [enteredItem, setEnteredItem] = useState("");
	// console.log(quantity);
	// console.log(enteredItem);
	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newItem = {
			title: enteredItem,
			quantity,
			packed: false,
			id: Date.now(),
		};
		// console.log(newItem);
		setItems((item) => [...item, newItem]);
	};
	return (
		<form className="add-form" onSubmit={handleFormSubmit}>
			<h2>What do you need for your trip?</h2>
			😊
			<select
				name="quantity"
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}
			>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select>
			<input
				type="text"
				placeholder="packing item"
				value={enteredItem}
				onChange={(e) => setEnteredItem(e.target.value)}
			/>
			<button>Add</button>
		</form>
	);
};
export default Form;
