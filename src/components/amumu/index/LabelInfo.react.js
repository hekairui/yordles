var React = require('react/addons'),
    IndexServer = require('./index.server');

var LabelInfo = React.createClass({
  getInitialState: function() {
    return {
      label: []
    };
  },
  componentDidMount: function() {
    IndexServer.getLabelInfo({
      city_id : 140,
      count : 20,
      page : 0,
      lat : 1,
      lng : 1
    },function(data){
      if (this.isMounted()) {
        this.setState({
          label: data
        });
      }
    }.bind(this),function(info){ 
      console.log(info)
    }.bind(this));
  },
  render: function () {
    var label = this.state.label.map(function(item){
      return (
        <div>
          <span>{item.label_id}</span>
          <span>{item.content}</span>
        </div>
      )
    })
    return (
      <div className="label-list">
        <div className="head">
          <span>ID</span>
          <span>名字</span>
        </div>
        {label}
      </div>
    );
  }
});

module.exports = LabelInfo;
