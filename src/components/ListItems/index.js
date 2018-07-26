import React, { Component } from 'react';
import renderHTML from 'react-render-html';

export class ListItems extends Component {

	renderItem = (episode, x) => {
		return (
			<li key={x} className="list-item">
				<img className="poster" src={episode.picture_url} alt={episode.caption}/>
				<div className="list-item-text">
					<h3>{episode.title}</h3>
					{renderHTML(episode.description)}
				</div>
			</li>
		);
	}

  render() {
    const { result, compare } = this.props;
    return (	
			result.sort(compare).map((episode, x) => this.renderItem(episode, x))
		);
	}
}

export default ListItems;
