import Link from 'next/link';
import { Fragment } from 'react';

export default function Navigation() {
	return (
		<Fragment>
			<ul>
				<li>
					<Link href="/">
						<a href="/">Home</a>
					</Link>
				</li>
				<li>
					<Link href="/posts">
						<a href="/post">Post</a>
					</Link>
				</li>
			</ul>
		</Fragment>
	);
}
