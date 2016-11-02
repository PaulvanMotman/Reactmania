class Comment extends React.Component {
	constructor(props) {
		super(props)
		this.state = {editing: false} 
		this.edit = this.edit.bind(this)
		this.save = this.save.bind(this)
		this.remove = this.remove.bind(this)
	}
	edit() {
		this.setState({editing: true})
	}
	remove() {
		console.log("Removing comment")
		this.props.removeCommentText(this.props.index)
	}
	save() {
		var val = this.refs.newText.value
		this.props.updateCommentText(this.refs.newText.value, this.props.index)
		this.setState({editing: false})
	}
	renderNormal() {
		return (
			<div className="commentContainer">
				<div className="commentText">{this.props.children}</div>
				<button onClick={this.edit} className="button-primary">Edit</button>
				<button onClick={this.remove} className="button-danger">Remove</button>
			</div>
			)
	}
	renderForm() {
		return (
			<div className="commentContainer">
				<textarea ref="newText" defaultValue={this.props.children}></textarea>
				<button onClick={this.save} className="button-success">Save</button>
			</div>
			)
	}
	render() {	
		if (this.state.editing) {
			return this.renderForm()
		} else {
			return this.renderNormal()
		}
	}
}


class Checkbox extends React.Component {
	constructor(props) {
	  super(props)
	  // In ES6, React components no longer autobind this to non React methods. Therefor:
	  this.handleEvent = this.handleEvent.bind(this)
	  this.state = {checked: true} 
	}
	handleEvent() {
		this.setState({checked: !this.state.checked})
	}
	render() {
		var msg
		if (this.state.checked) {
			msg='checked'
		} else {
			msg='unchecked'
		}
		return (
			<div>
				<input type="checkbox" onChange={this.handleEvent} defaultChecked={this.state.checked}/>
				<h3>Checkbox is {msg}</h3>
			</div>
		)
	};
}



class Container extends React.Component {
	constructor(props) {
		super(props)
		this.removeComment = this.removeComment.bind(this)
		this.updateComment = this.updateComment.bind(this)
		this.eachComment = this.eachComment.bind(this)
		this.state = {comments: [
			'I like bacon', 
			'and cheeseee', 
			'and hamburgers']
		} 
	}
	removeComment(i) {
		console.log("Removing comment " + i)
		var comment = this.state.comments
		comment.slice(i,1)
		this.setState({comments: comment})
	}
	updateComment(newtext, i) {
		console.log("Updating comment " + i)
		var comment = this.state.comments
		comment[i] = newtext
		this.setState({comments: comment})
	}
	eachComment(text, i) {
		return (
			<Comment key={i} index={i} updateCommentText={this.updateComment} removeCommentText={this.removeComment}>
				{text}
			</Comment>
		)
	}
	render() {
		return (
			<div className="board">
				{this.state.comments.map(this.eachComment)}
				<Checkbox />
			</div>
		)
	}
}


ReactDOM.render(<Container />, document.getElementById('container')
)

