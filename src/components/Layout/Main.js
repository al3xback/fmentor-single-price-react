const Main = () => {
	return (
		<main>
			<div className="container">
				<div className="card">
					<section className="card__block card__block--join-community">
						<h2 className="card__title">Join our community</h2>
						<mark className="card__mark">
							30-day, hassle-free money back guarantee
						</mark>
						<p className="card__desc">
							Gain access to our full library of tutorials along
							with expert code reviews. Perfect for any developers
							who are serious about honing their skills.
						</p>
					</section>
					<div className="card__group">
						<section className="card__block card__block--monthly-subsription">
							<h3 className="card__title">Monthly Subscription</h3>
							<p className="card__price">
								<span className="num">$29</span>
								<span className="label">per month</span>
							</p>
							<p className="card__desc">
								Full access for less than $1 a day
							</p>
							<a href="#/" className="btn btn--primary btn--full">
								Sign Up
							</a>
						</section>
						<section className="card__block card__block--why-us">
							<h3 className="card__title">Why Us</h3>
							<ul className="card__list">
								<li>Tutorials by industry experts</li>
								<li>Peer &amp; expert code review</li>
								<li>Coding exercises</li>
								<li>Access to our GitHub repos</li>
								<li>Community forum</li>
								<li>Flashcard decks</li>
								<li>New videos every week</li>
							</ul>
						</section>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Main;
