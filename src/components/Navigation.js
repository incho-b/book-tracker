import React from 'react';
import { Link } from 'react-router-dom';

import { RiBookFill } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';
import { BsBarChartFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IconContext } from 'react-icons';

import './Navigation.css';

function Navigation() {
	return (
		<IconContext.Provider value={{ color: 'rgba(255,255,255,1)' }}>
			<nav className="navigation w1 display-flex justify-between align-center text-center">
				<Link to="/" className="display-block w1 p1">
					<RiBookFill />
				</Link>
				<Link to="/search" className="display-block w1 p1">
					<FaSearch />
				</Link>
				<Link to="/chart" className="display-block w1 p1">
					<BsBarChartFill />
				</Link>
				<Link to="/bookList" className="display-block w1 p1">
					<FiMoreHorizontal />
				</Link>
			</nav>
		</IconContext.Provider>
	);
}

export default Navigation;
