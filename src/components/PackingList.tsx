import Item from "./Item";
import { useState } from "react";
type Props = {
	items: {
		title: string;
		quantity: number;
		packed: boolean;
		id: number;
	}[];
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
const PackingList = ({ items, setItems }: Props) => {
	const [sortBy, setSortBy] = useState("input");
	let sortedItems: any[];
	if (sortBy === "input") sortedItems = items;
	if (sortBy === "title") {
		sortedItems = items.slice().sort((a, b) => a.title.localeCompare(b.title));
	}
	const deletedItemHandler = (id: number) => {
		console.log(id);
		const filterItems = items.filter((item) => item.id !== id);
		setItems(filterItems);
	};
	const handleClearList = () => {
		setItems([]);
	};
	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => {
					return (
						<Item
							title={item.title}
							quantity={item.quantity}
							packed={item.packed}
							id={item.id}
							deletedItemHandler={deletedItemHandler}
						/>
					);
				})}
			</ul>
			<div className="actions">
				<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
					<option value="input">Sort by input</option>
					<option value="title">Sort by Title</option>
				</select>
				<button onClick={handleClearList}>Clear list</button>
			</div>
		</div>
	);
};
export default PackingList;
