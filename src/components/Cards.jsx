import position from '/src/assets/Fill 219.svg'
import plusButton from '/src/assets/Frame 1.svg'

export default function Cards({ siteUrl, imageUrl, lenguages, date, description, title }) {
	return (
		<div className="cards">
			<div className="cards--left">
				<a
					href={siteUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="plus--button">
					{siteUrl && (
						<img
							src={plusButton}
							alt="+ to go into another page"
						/>
					)}
				</a>
				<img
					src={imageUrl}
					alt={title}
					className="site--img"
				/>
			</div>
			<div className="cards--right">
				<div className="cards--position">
					<img
						src={position}
						alt=""
					/>
					<p>{lenguages}</p>
				</div>
				<h1>{title}</h1>
				<p className="cards--date">Last Updated: {date}</p>
				<p className="cards--description">{description}</p>
			</div>
		</div>
	)
}
