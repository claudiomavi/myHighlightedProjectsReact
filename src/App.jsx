import Header from "/src/components/Header";
import Cards from "/src/components/Cards";
import data from "/data.js";

export default function App() {
	const travels = data.map((card) => {
		return <Cards key={card.title} {...card} />;
	});

	return (
		<div>
			<Header />
			{travels}
		</div>
	);
}
