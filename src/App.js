import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Bookshelf from './routes/Bookshelf';
import Search from './routes/Search';
import Chart from './routes/Chart';
import More from './routes/Profile';
import BookList from './bookList';
import Navigation from './components/Navigation';

// const getResults = useCallback(async () => {
// 	try {
// 		const res = await axios.get(`${process.env.NEXT_PUBLIC_DEV_API}/search/book?searchQuery=${searchQuery}`);
// 		console.log(res);
// 	} catch (err) {
// 		console.log(err);
// 	}
// }, [searchQuery]);

// window.myCallback = function (data) {
// 	console.log(data);
// };

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
