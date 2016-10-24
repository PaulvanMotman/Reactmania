class Comment extends React.Component {
	constructor(props) {
		super(props)
		this.state = {editing: false} 
		this.edit = this.edit.bind(this)
		this.save = this.save.bind(this)
	}
	edit() {
		this.setState({editing: true})
	}
	remove() {
		console.log("Removing comment")
	}
	save() {
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
				<textarea defaultValue={this.props.children}></textarea>
				<button onClick={this.save} className="button-succes">Save</button>
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
	render() {
		return (
			<div className="board">
				<Comment>joehoe</Comment>
				<Comment>hallooo</Comment>
				<Comment>gekkie</Comment>
				<Checkbox />
			</div>
		)
	}
}



ReactDOM.render(<Container />, document.getElementById('example')
)

