type Props = {
	items: {
		title: string;
		quantity: number;
		packed: boolean;
		id: number;
	}[];
};
const Stat = ({ items }: Props) => {
	if (!items.length)
		return <p className="stats">Start adding items to your list</p>;
	return (
		<footer className="stats">
			<em>You have {items.length} items on your list</em>
		</footer>
	);
};
export default Stat;
