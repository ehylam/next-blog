import React, { useState, useEffect, Fragment } from 'react';

const Post = data => {
	console.log(data);
	return (
		<Fragment>
			<h3>{data.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: data.excerpt }} />
		</Fragment>
	);
};

export default Post;
