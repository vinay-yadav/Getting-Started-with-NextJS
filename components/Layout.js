import styles from '../styles/Layout.module.css';
import Nav from './Nav';
import Header from './Header';

const Layout = props => (
    <>
        <Nav/>
        <div className={styles.container}>
            <main className={styles.main}>
                <Header/>
                {props.children}
            </main>
        </div>
    </>
);

export default Layout;