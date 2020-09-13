import Header from '../components/Header';
import Footer from '../components/Footer';
import { Fragment } from 'react';

export default function Layout({ children }) {
	return (
		<Fragment>
			<Header />
			{children}
			<Footer />
		</Fragment>
	);
}
