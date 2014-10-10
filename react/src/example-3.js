/** @jsx React.DOM */

var CommentInput = React.createClass({

  getInitialState: function() {
    return {text: "", author: "Jonas"};
  },

  handleInputChange: function(e) {
    this.setState({text: e.target.value})
  },

  handleClick: function() {
    this.setState({text: ""});
    this.props.onAddComment(this.state)
  },

  render: function() {
    return (
      <div>
        <div class="row">
          <textarea placeholder="You're comment here"
                    value={this.state.text}
                    onChange={this.handleInputChange}/></div>
        <div class="row">
          <button onClick={this.handleClick}>Comment</button>
        </div>
      </div>
    )
  }
});

var CommentList = React.createClass({

  render: function() {
    var comments = this.props.comments.map(function(comment) {
      return (
        <div>
          <dt>{comment.author}:</dt>
          <dd>{comment.text}</dd>
        </div>
      )
    });
    return <dl className="dl-horizontal">{comments}</dl>
  }
})

var Application = React.createClass({

  getInitialState: function() {
    return {comments: []};
  },

  handleNewComment: function(comment) {
    var state = this.state.comments
    state.push(comment)
    this.setState({comments: state});
  },

  render: function() {
    return (
      <div>
        <h1>Ex. 3: Comment box</h1>
        <CommentInput onAddComment={this.handleNewComment}/>
        <CommentList comments={this.state.comments}/>
      </div>
    );
  }
});

React.renderComponent(<Application/>, document.getElementById('app'));
