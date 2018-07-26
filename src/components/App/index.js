import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { loadData } from '../../actions/loadData'
import Header from '../Header'
import ContentBlock from '../ContentBlock'

class App extends Component {

	constructor(props) {
    super(props);
    this.state = {
			search: '',
			sortOrder: 'asc'
    };
  }

	componentDidMount(){
		this.props.loadData();
	}

  loadData = (event) => {
    this.props.loadData();
	}
	
	searchInputHandler = (e) => {
    this.setState({ search: e.target.value });
	}

	searchResults = (data) => {
		const { search } = this.state;
    if (search === '') return data;
		return data.filter(item => item.title.toLowerCase().indexOf(search) !== -1);
	}

	compare = (a, b) => {
		const { sortOrder } = this.state;
    const _a = a.title.toLowerCase()
		const _b = b.title.toLowerCase()
		if(sortOrder === 'asc') {
			if (_a < _b) return -1;
			if (_a > _b) return 1;
			return 0;
		}else{
			if (_a > _b) return -1;
			if (_a < _b) return 1;
			return 0;
		}
	}
	
	setSort = (order) => {
		this.setState({
			sortOrder: order,
		});
	}

 	render() {
		const { data } = this.props.reducer;
		const { search } = this.state;
  	return (
			<div className="App">
				<Header 
					searchInputHandler={this.searchInputHandler}
					setSort={this.setSort}
					search={search} />
				<ContentBlock 
					data={data}
					search={search}
					searchResults={this.searchResults}
					compare={this.compare} />
			</div>
  	);
 	}
}

const mapStateToProps = state => ({
	...state,
	data: state.data || []
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(loadData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
