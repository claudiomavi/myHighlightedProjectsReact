import position from "/src/assets/Fill 219.svg";
import plusButton from "/src/assets/Frame 1.svg";

export default function Cards(props) {
	return (
		<div className="cards">
			<div className="cards--left">
				<a href="https://www.google.com" className="plus--button">
					<img src={plusButton} alt="+ para ir en otra página" />
				</a>
				<img src={props.imageUrl} alt={props.title} className="site--img" />
			</div>
			<div className="cards--right">
				<div className="cards--position">
					<img src={position} alt="" />
					<p>{props.location}</p>
				</div>
				<h1>{props.title}</h1>
				<p className="cards--date">
					{props.startDate} - {props.endDate}
				</p>
				<p className="cards--description">{props.description}</p>
			</div>
		</div>
	);
}
