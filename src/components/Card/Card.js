import './Card.scss';
import JoinCommunity from './SubCard/JoinCommunity';
import MonthlySubscription from './SubCard/MonthlySubscription';
import WhyUs from './SubCard/WhyUs';

const Card = () => {
	return (
		<div className="card">
			<JoinCommunity />
			<div className="card__group">
				<MonthlySubscription />
				<WhyUs />
			</div>
		</div>
	);
};

export default Card;
