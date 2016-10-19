class Movie extends React.Component {
  render() {
    return (
    	<div>
    		<h2>{this.props.title}</h2>
    		<h3>{this.props.genre}</h3>
    	</div>
    )
  }
}

ReactDOM.render(
	<div>
		<Movie title='avatar' genre='action movie'/>
		<Movie title='titanic' genre='romance'/>
		<Movie title='rush hour' genre='bromance'/>
	</div>, 
	document.getElementById('example')
)