import Layout from '../templates/layout';
import styles from '../styles/Layout.module.scss';

export default function Home() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1>Hello, world.</h1>
			</main>
		</div>
	);
}
