(function() {
  'use strict';

  let data = [
    {id: 1, author: 'Pete Hunt', text: 'This is one comment'},
    {id: 2, author: 'Jordan Walke', text: 'This is *another* comment'}
  ];
  let Comment = React.createClass({
    rawMarkup: function() {
      let md = new Remarkable();
      let rawMarkup = md.render(this.props.children.toString());
      return {__html: rawMarkup};
    },
    render: function() {
      return (
        <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
          <span dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
      );
    }
  });

  let CommentBox = React.createClass({
    render: function() {
      return (
        <div className="commentBox">
            <h1>Comments</h1>
            <CommentList data={this.props.data} />
            <CommentForm />
        </div>
      );
    }
  });

  let CommentList = React.createClass({
    render: function() {
      let commentNodes = this.props.data.map(function(comment) {
        return (
          <Comment author={comment.author} key={comment.id}>
            {comment.text}
          </Comment>
        );
      });
      return (
        <div className="commentList">
             {commentNodes}
        </div>
      );
    }
  });

  let CommentForm = React.createClass({
    render: function() {
      return (
        <div className="commentForm">
          Hello, world! I am a CommentForm.
        </div>
      );
    }
  });
  ReactDOM.render(
    <CommentBox data={data} />,
    document.getElementById('content')
  );
})();
