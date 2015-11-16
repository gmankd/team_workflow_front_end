'use strict';

var place_holder = {
    url: 'http://jsonplaceholder.typicode.com/users',

    ajax: function(config, cb) {
        $.ajax(config).done(function(data, textStatus, jqxhr) {
            cb(null, data);
        }).fail(function(jqxhr, status, error) {
            cb({
                jqxher: jqxhr,
                status: status,
                error: error
            });
        });
    },

    readProfile: function readProfile(user_id, token, callback) {
        this.ajax({
            method: 'GET',
            url: this.url,
            dataType: 'json'
        }, callback);
    }
}
