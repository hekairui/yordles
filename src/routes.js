var React = require('react/addons'),
    Router = require('react-router'),
    Main = require('./components/Main.react'),
    Home = require('./components/Home.react'),
    About = require('./components/About.react'),
    Preferences = require('./components/Preferences.react'),
    Teemo = require('./components/teemo/teemo.react'),
    Amumu = require('./components/amumu/amumu.react'),
    Veigar = require('./components/Veigar/veigar.react'),
    Tristana = require('./components/tristana/tristana.react'),

    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler,

    App = React.createClass({
      render: function () {
        return (
          <RouteHandler/>
        );
      }
    });

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="Main" path="/" handler={Main}>
      <DefaultRoute name="home" handler={Home} />
      <Route name="about" path="/about" handler={About} />
      <Route name="preferences" path="/preferences" handler={Preferences}/>
      <Route name="teemo" path="/home/teemo" handler={Teemo} />
      <Route name="amumu" path="/home/amumu" handler={Amumu} />
      <Route name="veigar" path="/home/veigar" handler={Veigar} />
      <Route name="tristana" path="/home/tristana" handler={Tristana} />
    </Route>
  </Route>
);

module.exports = routes;