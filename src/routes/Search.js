import React from 'react';
import './Search.css';
import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Search() {
	return (
		<div className="search-wrap display-flex justify-between align-center my2 mx1">
			<input className="w1 p075" type="text" placeholder="책제목/저자/출판사/IBSM" />
			<span className="py075 px075 pl2 cursor-pointer">
				<IconContext.Provider value={{ color: '#2699fb' }}>
					<FaSearch />
				</IconContext.Provider>
			</span>
		</div>
	);
}

export default Search;
