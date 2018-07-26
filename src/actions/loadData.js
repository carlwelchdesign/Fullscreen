const url = 'https://gist.githubusercontent.com/memikequinn/475999c535ef4e1341f1262484244c68/raw/d77d0f6f4d7e53d7bf5dd7bd1997b27d291d4b0b/db.json';

export const loadData = () => dispatch => {
	console.log('LOAD_DATA');
	fetch(url)
		.then(response => {
			response.json().then(data => {
				console.log('data: ', data)
				dispatch({
					type: 'LOAD_DATA',
					payload: data
			 	});
			})		
		});
}

