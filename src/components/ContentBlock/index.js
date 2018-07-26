import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import ListItems from '../ListItems'

export class ContentBlock extends Component {
	renderTable = (data) => {
		const { searchResults, compare, search } = this.props;
		return (
			data && data.map((item, i) => {
				const result = searchResults(item.seasons[0].show_episodes);
				const showNumbers = search === '';
				return (
					<div key={i}>
						<h2>{item.name}</h2>
						{renderHTML(item.summary)}
						<ul>
							{!showNumbers && <li className="search-number">{`${result.length} Results`} </li>}
							<ListItems 
								result={result}
								compare={compare} />
						</ul>
					</div>
				)
			})
		);
	}

  render() {
    const { data } = this.props;
    return (			
			<div className="content">
				{this.renderTable(data)}
			</div>
    );
  }
}

export default ContentBlock;
