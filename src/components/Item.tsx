import { useState } from "react";
type Props = {
	title: string;
	quantity: number;
	packed: boolean;
	deletedItemHandler: (id: number) => void;
	id: number;
};
const Item = ({ title, packed, quantity, deletedItemHandler, id }: Props) => {
	const [checked, setChecked] = useState(packed);
	return (
		<li>
			<span style={{ textDecoration: `${checked ? "line-through" : ""}` }}>
				{quantity} {title}
			</span>
			<button onClick={() => deletedItemHandler(id)}>❌</button>
			<input type="checkbox" onChange={() => setChecked(!checked)} />
		</li>
	);
};
export default Item;
