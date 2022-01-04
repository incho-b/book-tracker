import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import Book from './components/Book';

const Aladdin_URL = `https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbhaggardjmf1043001&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101`;

class Home extends React.Component {
	state = {
		isLoading: true,
		books: [],
	};

	getBook = async () => {
		// const books = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating');

		// const books = await axios.get(Aladdin_URL);

		const books = await axios.get('/api/product');

		this.setState({ books, isLoading: false });
	};

	componentDidMount() {
		this.getBook();
	}

	render() {
		const { isLoading, books } = this.state;

		return (
			<section className="container">
				{isLoading ? (
					<div className="loader">
						<span className="loader__text">loading...</span>
					</div>
				) : (
					<div className="books">
						{console.log(books)}
						<Book />
						{/* {books.map((book) => (
							<Book
								key={book.itemId}
								// itemId={book.itemId}
								// pubDate={book.pubDate}
								title={book.title}
								// description={book.description}
								cover={book.covere}
								// genres={book.searchCategoryName}
							/>
						))} */}
					</div>
				)}
			</section>
		);
	}
}

export default Home;
