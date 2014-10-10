/** @jsx React.DOM */

var Counter = React.createClass({
  getInitialState: function() {
    return {count: 42};
  },

  handleInc: function(e) {
    this.setState({count: this.state.count + 1});
  },

  render: function() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleInc}> +1 </button>
      </div>
    )
  }
});

React.renderComponent(
  <div>
    <h1>Ex. 2: Counter</h1>
    <Counter/>
  </div>,
  document.getElementById('app'));
