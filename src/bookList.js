import React from 'react';
import axios from 'axios';
// import $ from 'jquery';
import Book from './components/Book';

class Home extends React.Component {
	state = {
		isLoading: true,
		books: [],
	};

	getBook = async () => {
		// const {
		// 	data: {
		// 		data: { movies },
		// 	},
		// } = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating');
		// this.setState({ movies, isLoading: false });
		// //{ data: { data: { movies } } } === movies.data.data.movies
		const books = await axios.get(
			'http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbhaggardjmf1043004&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101'
		);
		this.setState({ books, isLoading: false });
	};
	componentDidMount() {
		this.getBook();

		// setTimeout(() => {
		//     this.setState({ isLoading: false });
		// }, 6000);
	}

	render() {
		// console.log(this.getBook());
		const { isLoading, books } = this.state;
		return (
			<section className="container">
				{isLoading ? (
					<div className="loader">
						<span className="loader__text">loading...</span>
					</div>
				) : (
					<div className="books">
						{books.map((book) => (
							<Book
								key={book.itemId}
								itemId={book.itemId}
								pubDate={book.pubDate}
								title={book.title}
								description={book.description}
								cover={book.covere}
								genres={book.searchCategoryName}
							/>
						))}
					</div>
				)}
			</section>
		);
	}
}

export default Home;

// window.myCallback = function (data) {
// 	console.log(data);
// };

// class Home extends React.Component {
// 	setbookinfo = () => {
// 		var resultOfBookdata = null;
// 		var callbacks = () => {
// 			console.log('결과물', resultOfBookdata);
// 			this.setState({ data: resultOfBookdata });
// 			console.log('max', Math.floor(resultOfBookdata.totalResults / 5) + 1);
// 			this.setState({ maxpage: Math.floor(resultOfBookdata.totalResults / 5) + 1 });
// 		};
// 		const url = `https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbKey=ttbhaggardjmf1043001&Query=${this.state.booktitle}&output=js&callback=bookdisplay&MaxResults=5&SearchTarget=Book&Sort=SalesPoint&Start=${this.state.page}`;
// 		$.ajax({
// 			url: url,
// 			async: false,
// 			dataType: 'jsonp',
// 			jsonp: 'bookdisplay',
// 		});
// 		window.bookdisplay = (success, data) => {
// 			if (!success) {
// 				alert('도서검색에 실패했습니다.');
// 				return;
// 			}
// 			console.log('data?', data);
// 			resultOfBookdata = data;
// 			callbacks();
// 		};
// 		this.setState({ isclicked: true });
// 	};
// }
// export default Home;
