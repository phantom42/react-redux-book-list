// no brackets = import the full component
// brackets = import just the single method/property of component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList(){
		return this.props.books.map( (book) => {
			// this.props.selectBook comes from the actions
			return (
				<li 
					key={book.title} 
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
					{book.title}
				</li>
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

// anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
	// whenever selectBook is called, the result should be passed
	// to all reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote booklist from a component to a container
// it needs to know about this new dispatch method selectbook. make it
// availabe as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);