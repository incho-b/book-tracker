import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Movie({ itemId, pubDate, title, description, cover, searchCategoryName }) {
	return (
		<div className="movie">
			{/* <Link
				to={{
					// pathname: '/movie-detail',
					pathname: `/movie/${itemId}`,
					stalte: {
						pubDate,
						title,
						description,
						cover,
						searchCategoryName,
					},
				}}
			> */}
			<img src={cover} alt={title} title={title} />
			{/* <div className="movie__data">
				<h3 className="movie__title">{title}</h3>
				<h5 className="moive__pubDate">{pubDate}</h5>
				<ul className="movie__searchCategoryName">
					{searchCategoryName.map((genre, index) => (
						<li key={index} className="searchCategoryName__genre">
							{genre}
						</li>
					))}
				</ul>
				<p className="movie__description">{description.slice(0, 200)}...</p>
			</div> */}
			{/* </Link> */}
		</div>
	);
}

// Movie.propTypes = {
// 	itemId: PropTypes.number.isRequired,
// 	pubDate: PropTypes.number.isRequired,
// 	title: PropTypes.string.isRequired,
// 	description: PropTypes.string.isRequired,
// 	cover: PropTypes.string.isRequired,
// 	searchCategoryName: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default Movie;
