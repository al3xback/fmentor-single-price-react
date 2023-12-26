const MonthlySubscription = () => {
	return (
		<section className="card__block card__block--monthly-subsription">
			<h3 className="card__title">Monthly Subscription</h3>
			<p className="card__price">
				<span className="num">$29</span>
				<span className="label">per month</span>
			</p>
			<p className="card__desc">Full access for less than $1 a day</p>
			<a href="#/" className="btn btn--primary btn--full">
				Sign Up
			</a>
		</section>
	);
};

export default MonthlySubscription;
