import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Bookshelf from './routes/Bookshelf';
import Search from './routes/Search';
import Chart from './routes/Chart';
import More from './routes/Profile';
import BookList from './bookList';
import Navigation from './components/Navigation';

// const cors = require('cors');
// const corsOptions = {
// 	origin: 'http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbhaggardjmf1043001&Query=aladdin&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101',
// 	credentials: true, //access-control-allow-credentials:true
// 	optionSuccessStatus: 200,
// };
// App.use(cors(corsOptions));

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
