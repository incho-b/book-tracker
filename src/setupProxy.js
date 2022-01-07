const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (App) {
	App.use(
		'/api', // 불러오려는 server 의 api path
		createProxyMiddleware({
			target: 'https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbhaggardjmf1043001&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101', // server 주소를 넣어주면 된다.
			changeOrigin: true,
		})
	);
};
