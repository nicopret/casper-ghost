var casper = require('casper').create({
	waitTimeout: 20000,
	viewportSize: {
		width: 1280,
		height: 1600
	}
}),
	server = require('webserver').create();

server.listen('127.0.0.1:8000', function(request, response) {
	var params = JSON.parse(request.post);
	
	casper.start(params.scrape, function() {
		params.selector ? 
			casper.waitForSelector(params.selector).captureSelector(params.path, params.selector) :
			this.capture(params.path);
	});

	casper.run(function() {
		response.statusCode = 200;
		response.write(JSON.stringify({}, null, null));
		response.close();
		this.clear();
	});
});
