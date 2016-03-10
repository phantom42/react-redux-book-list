// no brackets = import the full component
// brackets = import just the single method/property of component
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
	renderList(){
		return this.props.books.map( (book) => {
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
			);
		});
	}
	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	// whatever is returned will show up as props inside booklist
	return {
		books: state.books
	};
}

export default connect(mapStateToProps)(BookList);