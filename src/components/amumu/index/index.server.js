
var ServiceUtil = require('../../../utils/ServiceUtil');

var indexServer = {
  getLabelInfo: function(options,success,error){
    ServiceUtil
    .get('/3/product_label/search_label.json', options)
    .then(function(list){
      success(list)
    })
    .catch(function(info){
      error(info)
    })
  }
}

module.exports = indexServer;
