var casper = require('casper').create({
	waitTimeout: 60000
});
var server = require('webserver').create();
// use this line to get all the games from sanzar
//var matchSelector = '#fixturesAndResults';
// use this line to get the results from sanzar
//var matchSelector = '.results';
// use this line to get the match details from sanzar
var matchSelector = '#matchCentre';
var body = {};

console.log('running');

server.listen('127.0.0.1:9000', function(request, response) {
    var params = JSON.parse(request.post);
    var body = {};

    casper.start(params.scrape).wait(params.timeout ? params.timeout : 1000).waitForSelector(params.selector, function() {
        body = this.getPageContent();
    });

    casper.run(function() {
        response.statusCode = 200;
        response.write(JSON.stringify(body, null, null));
        response.close();
        body = {};
    });
});