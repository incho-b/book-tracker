const proxy = require('http-proxy-middleware');

module.exports = function (App) {
	App.use(
		'/api',
		proxy.createProxyMiddleware({
			target: 'https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbKey=ttbhaggardjmf1043001&Query=${this.state.booktitle}&output=js&callback=bookdisplay&MaxResults=5&SearchTarget=Book&Sort=SalesPoint&Start=${this.state.page}',
			changeOrigin: true,
			pathRewrite: {
				'^/api': '',
			},
		})
	);
};
