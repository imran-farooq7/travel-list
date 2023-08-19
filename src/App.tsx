import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stat from "./components/Stat";

const App = () => {
	const [items, setItems] = useState([
		{
			title: "socks",
			quantity: 2,
			packed: false,
			id: 1,
		},
		{
			title: "passport",
			quantity: 1,
			packed: false,
			id: 2,
		},
		{
			title: "lays",
			quantity: 2,
			packed: false,
			id: 3,
		},
	]);
	return (
		<div className="app">
			<Logo />
			<Form setItems={setItems} />
			<PackingList items={items} setItems={setItems} />
			<Stat items={items} />
		</div>
	);
};
export default App;
