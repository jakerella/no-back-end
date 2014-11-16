window.beerApp = (function(beer) {
    
    beer.doSearch = function(query, callback) {
        
        $.ajax({
            url: "api/search",
            data: { "query": query },
            dataType: "json",
            success: function searchSuccessHandler(data) {
                beer.handleSearchResults(data.results);
                callback(data.results);
            },
            error: function searchErrorHandler() {
                beer.notify("Sorry, but the search failed!");
                callback(null);
            }
        });
        
    };



    beer.handleSearchResults = function(results) {
        return; // Obviously this would need to be implemented...
    };

    beer.notify = function(msg) {
        return; // ...this one, too.
    };

    return beer;

})(window.beerApp || {});