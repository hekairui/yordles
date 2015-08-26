var React = require('react/addons'),
    Router = require('react-router'),
    Link = Router.Link;

var Home = React.createClass({
  mixins: [Router.Navigation],
  handleGoBackClick: function () {
    this.goBack();
  },
  render: function () {
    return (
      <div className="home">
        <div className="teemo-index button-base">
          <Link to="teemo">teemo-管理</Link>
        </div>
        <div className="amumu-index button-base">
          <Link to="amumu">amumu-结算</Link>
        </div>
        <div className="veigar-index button-base">
          <Link to="veigar">veigar-商务</Link>
        </div>
        <div className="tristana-index button-base">
          <Link to="tristana">tristana-统计</Link>
        </div>
      </div>
    );
  }
});

module.exports = Home;