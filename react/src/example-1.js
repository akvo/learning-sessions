/** @jsx React.DOM */

Hello = React.createClass({
  render: function() {
    return <h1>Hello, {this.props.who}!</h1>;
  }
});

React.renderComponent(
  <Hello who="Akvo"/>,
  document.getElementById('app'));
