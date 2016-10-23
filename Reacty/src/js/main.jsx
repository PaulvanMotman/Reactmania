class Comment extends React.Component {
  render() {
    return (
    	<div className="commentContainer">
    		<div className="commentText">{this.props.gekkie}</div>
    		<button className="button-primary">Edit</button>
    		<button className="button-danger">Remove</button>
    	</div>
    )
  }
}


class Container extends React.Component {
  render() {
    return (
    	<div className="commentContainer">
    		<Comment gekkie="hihi wat gek"/>
    		<Comment gekkie="hihi wat gek"/>
    		<Comment gekkie="hihi wat gek"/>
    		<Comment gekkie="hihi wat gek"/>
    	</div>
    )
  }
}



ReactDOM.render(<Container />, document.getElementById('example'))

