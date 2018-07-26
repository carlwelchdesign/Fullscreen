import React from 'react';

export class Header extends React.PureComponent {
  render() {
    const { searchInputHandler, setSort, search } = this.props;
    return (
      <header className="App-header">
        <h1 className="App-title">Fullscreen Test</h1>
        <input
					onChange={searchInputHandler}
					placeholder={'Search...'}
					value={search}
					className="search-input" />
        <div>
					<button onClick={() => setSort('asc')}>Sort Ascending</button>
					<button onClick={() => setSort('des')}>Sort Decending</button>
        </div>
    	</header>
    );
  }
}

export default Header;
