function AjaxRequest () {
    var noop = function (data) { };
    
    this.get = function (options) {
        if (!options.url) throw 'Must include URL in GET request.';

        options.success = options.success || noop;
        options.error = options.error || noop;

        var xhr = new XMLHttpRequest();
        xhr.open('GET', encodeURI(options.url));
        xhr.onload = function () {
            if (xhr.status === 200) {
                options.success(xhr.responseText);
            } else {
                options.error(xhr.responseText);
            }
        };
        xhr.send();
    };

    this.post = function (options) {
        if (!options.url) throw 'Must include URL in POST request.';
        
        options.success = options.success || noop;
        options.error = options.error || noop;

        var xhr = new XMLHttpRequest();
        xhr.open('POST', encodeURI(options.url));
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            if (xhr.status === 200 || xhr.status === 201) {
                options.success(xhr.responseText);
            } else {
                options.error(xhr.responseText);
            }
        };
        xhr.send(encodeURI(options.data));
    };
}

module.exports = new AjaxRequest();