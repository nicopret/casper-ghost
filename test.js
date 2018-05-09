const request = require('request');

/**
 * Uncomment the request if you want to get an image of a page, change the 
 * scrape url and selector to the relevant page you want to scrape. The selector
 * is optional and when present will only capture the content associated with the
 * selector.
 */
request({
    method: 'POST',
    url: 'http://127.0.0.1:8000',
    json: {
        path: "github.png",
        scrape: "https://github.com/"
    }
}, (err, res) => console.log(err ? err : res.body));

/**
 * Uncomment the request if you want to get the html code of a page, change the 
 * scrape url and selector to the relevant page you want to scrape.
 */
/*
request({
    method: 'POST',
    url: 'http://127.0.0.1:9000',
    json: {
        scrape: "https://github.com/",
        selector: '#start-of-content',
        timeout: 2000
    }
}, (err, res) => console.log(err ? err : res.body));
*/