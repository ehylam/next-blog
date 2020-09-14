import React, { useState, useEffect } from 'react';

import Layout from '../templates/layout';
import Post from '../components/Post';
const Posts = () => {
	var [wpData, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const api = 'http://localhost:8888/tailwind/wp-json/wp/v2/posts';
			const res = await fetch(api);
			const data = await res.json();
			setData(data);
		};
		getData();
	}, []);
	console.log(wpData);

	return (
		<Layout>
			{wpData.map(data => {
				return (
					<Post
						key={data.id}
						date={data.date}
						title={data.title.rendered}
						excerpt={data.excerpt.rendered}
						content={data.content.rendered}
						isPublished={data.status}
					/>
				);
			})}
		</Layout>
	);
};

export default Posts;
