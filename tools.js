
// Mockjax

$.mockjax({
    url: 'api/search',
    data: { query: 'fhqwhgads' },
    responseText: { results: [] }
});

$.mockjax({

    url: 'api/search',
    method: 'GET',
    response: function(settings) {
        var data = [];

        if (settings.data.query && settings.data.query === 'foobar') {
            // ...
            data.push({
                id: 13,
                name: 'Foobar',
                // ...
            });
        }

        this.status = 200;
        this.responseText = { results: data };
    }

});

$.mockjax({
    url: 'api/search',
    data: { query: 'HTTP-ERROR' },
    status: 500,
    responseText: 'Uh oh...'
});



