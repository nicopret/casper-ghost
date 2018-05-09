To use html-scrape-server, run the command:

casperjs html-scrape-server.js

then post the following json:

{
    "scrape": "the url to be scraped",
    "selector": "an ID or class on the page that the scraper needs to wait for",
    "timeout": "the time to wait in seconds before the page is scraped"
}

To use the image-capture-server, post the following json:

{
    "path": "the full path with the image name that must be saved",
    "scrape": "the url to be scraped",
    "selector": "an ID or class on the page that the scraper needs to wait for"
}