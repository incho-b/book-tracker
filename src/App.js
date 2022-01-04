import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Bookshelf from './routes/Bookshelf';
import Search from './routes/Search';
import Chart from './routes/Chart';
import More from './routes/Profile';
import BookList from './bookList';
import Navigation from './components/Navigation';

function App() {
	return (
		<HashRouter>
			<Navigation />
			<Routes>
				<Route path="/" exact={true} element={<Bookshelf />} />
				<Route path="/search" element={<Search />} />
				<Route path="/chart" element={<Chart />} />
				<Route path="/more" element={<More />} />
				<Route path="/bookList" element={<BookList />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
