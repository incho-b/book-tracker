import React from 'react';

function Book({ itemId, pubDate, title, description, cover, searchCategoryName }) {
	return (
		<div className="book">
			{/* <Link
				to={{
					// pathname: '/book-detail',
					pathname: `/book/${itemId}`,
					stalte: {
						pubDate,
						title,
						description,
						cover,
						searchCategoryName,
					},
				}}
			> */}
			<h3 className="book__title">title:{title}</h3>
			{/* <img src={cover} alt={title} title={title} />
			<div className="book__data">
				<h3 className="book__title">{title}</h3>
				<h5 className="moive__pubDate">{pubDate}</h5>
				<ul className="book__searchCategoryName">
					{searchCategoryName.map((genre, index) => (
						<li key={index} className="searchCategoryName__genre">
							{genre}
						</li>
					))}
				</ul>
				<p className="book__description">{description.slice(0, 200)}...</p>
			</div> */}
			{/* </Link> */}
		</div>
	);
}

// Book.propTypes = {
// itemId: PropTypes.number.isRequired,
// 	pubDate: PropTypes.number.isRequired,
// 	title: PropTypes.string.isRequired,
// 	description: PropTypes.string.isRequired,
// 	cover: PropTypes.string.isRequired,
// 	searchCategoryName: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default Book;
