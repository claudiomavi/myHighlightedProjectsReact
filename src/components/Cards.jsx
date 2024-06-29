import position from "/src/assets/Fill 219.svg";

export default function Cards(props) {
	return (
		<div className="cards">
			<div className="cards--left">
				<img src={props.imageUrl} alt={props.title} />
			</div>
			<div className="cards-right">
				<div className="cards--position">
					<img src={position} alt="" />
					<p>{props.location}</p>
					<a
						href={props.googleMapsUrl}
						target="_blank"
						rel="noopener noreferrer">
						View on Google Maps
					</a>
				</div>
				<h1>{props.title}</h1>
				<p>
					{props.startDate} - {props.endDate}
				</p>
				<p>{props.description}</p>
			</div>
		</div>
	);
}
