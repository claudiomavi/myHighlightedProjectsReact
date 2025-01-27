import Header from '/src/components/Header'
import Footer from '/src/components/Footer'
import Cards from '/src/components/Cards'
import data from '/data.js'

export default function App() {
	const travels = data.map((card) => {
		return (
			<Cards
				key={card.key}
				{...card}
			/>
		)
	})

	return (
		<div>
			<Header />
			{travels}
			<Footer />
		</div>
	)
}
