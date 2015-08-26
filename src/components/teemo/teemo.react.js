var React = require('react/addons'),
    Router = require('react-router'),
    FSO = require('../../utils/FileUtil');

var teemo = React.createClass({
  mixins: [Router.Navigation],
  handleGoBackClick: function () {
    this.goBack();
  },
  getInitialState: function() {
    return {value: '/Users/hklo',dir:['请输入正确路径']};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  handleClick: function(event) {
    this.setState({dir:FSO.walk(this.state.value.trim())});
  },
  render: function () {
    var value = this.state.value;
    var dir = this.state.dir.map(function(item){
      return (<p>{item}</p>)
    })
    return (
      <div className="about">
        <div className="about-content">
          <a onClick={this.handleGoBackClick}>Go Back</a>
          <div className="temmo-title">我只是来测试双向绑定和读取指定路径下文件夹目录的</div>
          <input name="url" type="text" value={value} onChange={this.handleChange} />
          <p>{value}</p>
          <a className="button-base get-file" onClick={this.handleClick.bind(this)}>获取</a>
          <div className="url-list" >{dir}</div>
        </div>
      </div>
    );
  }
});

module.exports = teemo;
