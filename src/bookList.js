import React from 'react';
import axios from 'axios';
import Movie from './components/Movie';

// function Home() {
// 	var main = $('div[id^=aladin-bookinfo]'); // aladin-bookinfo로 시작하는 id를 가진 div 엘리먼트를 찾습니다.
// 	// 그 엘리먼트가 존재한다면
// 	if (main.length > 0) {
// 		var id = main.attr('id').substr(16, 10); // ISBN(10자리)부분을 잘라내서 얻습니다 (16칸부터 10개만큼의 문자 얻기)
// 		var url = 'http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey=ttbhaggardjmf1043001&cover=big&ItemId=' + id + '&output=js&callback=bookDisplay';

// 		// 콜백 함수입니다.
// 		function bookDisplay(success, data) {
// 			/* 여기서 책 정보를 이용해 구조를 만듭니다! */
// 		}

// 		// AJAX 요청을 보냅니다. getJSON() 함수는 알라딘 API 대용으로 사용불가.
// 		$.ajax({
// 			url: url,
// 			jsonp: 'bookDisplay',
// 			dataType: 'jsonp',
// 		});
// 	}
// }

class Home extends React.Component {
	state = {
		isLoading: true,
		movies: [],
	};

	getMovies = async () => {
		// 	const {
		// 		data: {
		// 			data: { movies },
		// 		},
		// 	} = await axios.get('/ttb/api/ItemSearch.aspx?ttbkey=ttbhaggardjmf1043001&Query=aladdin&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101');
		// 	this.setState({ movies, isLoading: false });
		// 	//{ data: { data: { movies } } } === movies.data.data.movies
		const getMovie = await axios.get(
			'http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbhaggardjmf1043001&Query=aladdin&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101'
		);
	};

	componentDidMount() {
		// myCallback({ data: 'hello world!' });
		// console.log(this.getMovies());
		// this.getMovie();
		// setTimeout(() => {
		//     this.setState({ isLoading: false });
		// }, 6000);
	}

	render() {
		const { isLoading, movies } = this.state;

		return (
			<section className="container">
				{/* {isLoading ? (
					<div className="loader">
						<span className="loader__text">loading...</span>
					</div>
				) : (
					<div className="movies">
						{movies.map((movie) => (
							<Movie
								key={movie.isbn}
								itemId={movie.itemId}
								pubDate={movie.pubDate}
								title={movie.title}
								description={movie.description}
								cover={movie.cover}
								searchCategoryName={movie.searchCategoryName}
							/>
						))}
					</div>
				)} */}
			</section>
		);
	}
}

export default Home;
