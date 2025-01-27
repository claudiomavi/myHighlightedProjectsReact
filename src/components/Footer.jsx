export default function Footer() {
	const date = new Date()

	const year = date.getFullYear()

	return (
		<div className="footer">
			<h4 className="footer--title">&copy; {year} Claudio Marino</h4>
		</div>
	)
}
