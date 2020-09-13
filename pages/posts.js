import React, { Component, useState } from 'react';

import Layout from '../templates/layout';
const Posts = () => {
	var [useData, setData] = useState();

	const data = fetch('http://localhost:8888/tailwind/wp-json/wp/v2/posts')
		.then(function(res) {
			if (res !== 200) {
				console.log('No data found');
				return;
			}

			res.json().then(function(data) {
				console.log(data);
				setData(data);
			});
		})
		.catch(function(err) {
			console.log(err);
		});

	return (
		<Layout>
			<h1 />
		</Layout>
	);
};

export default Posts;
