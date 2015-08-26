var Q = require('q'),
    request = require('request'),
    extend = require('extend'),
    config = require('../config');

var parseToJson = function(res, body){
  if(res.headers['content-type'].indexOf('application/json') != -1){
    return JSON.parse(body);
  }else{
    return body;
  }
};

var paramsFitler = function(params){
  if(params){
    var newParams = {};
    extend(false, newParams, params);
    delete newParams.lang;
    return newParams;
  }else{
    return {};
  }
};

var req = function(options, defer){
  request(options, function (error, res, body) {
    if (!error && res.statusCode == 200) {
      defer.resolve(parseToJson(res, body));
    }else{
      defer.reject({
        error : error,
        body : parseToJson(res, body),
        res : res
      });
    }
  });
};

var apiService = {
  get: function(url, qs){
    var defer = Q.defer();
    var options = extend({
      method : 'get', 
      qs : paramsFitler(qs),
      url : config.api.urlPrefix + url
    });
    extend(false, options.qs);
    req(options, defer);
    return defer.promise;
  },
  post: function(url, form, multipart){
    var defer = Q.defer();
    var options = extend({
      method : 'post', 
      url : config.api.urlPrefix + url
    });
    if(multipart){
      options.formData = paramsFitler(form);
    }else{
      options.form = paramsFitler(form);
    }
    extend(false, options.form);
    req(options, defer);
    return defer.promise;
  }
};

module.exports = apiService;