var React = require('react/addons'),
    Router = require('react-router'),
    LabelInfo = require('./index/LabelInfo.react');

var amumu = React.createClass({
  mixins: [Router.Navigation],
  handleGoBackClick: function () {
    this.goBack();
  },
  render: function () {
    return (
      <div className="about">
        <div className="about-content">
          <a onClick={this.handleGoBackClick}>Go Back</a>
          <div className="amumu-title">我只是来测试AJAX的-去把我们北京的label拿上来</div>
          <LabelInfo />
        </div>
      </div>
    );
  }
});

module.exports = amumu;
