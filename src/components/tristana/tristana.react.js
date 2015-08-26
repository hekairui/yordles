var React = require('react/addons'),
    Router = require('react-router');

var tristana = React.createClass({
  mixins: [Router.Navigation],
  handleGoBackClick: function () {
    this.goBack();
  },
  render: function () {
    return (
      <div className="about">
        <div className="about-content">
          <a onClick={this.handleGoBackClick}>Go Back</a>
          <div className="title">tristana</div>
        </div>
      </div>
    );
  }
});

module.exports = tristana;
