import world from '/src/assets/Fill 213.svg'

export default function Header() {
	return (
		<div className="header">
			<img
				src={world}
				alt="world mapamundi"
			/>
			<h4 className="header--title">my highlighted projects.</h4>
		</div>
	)
}
