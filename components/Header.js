import styles from '../styles/Header.module.css';

const header = () => {
    const x = 5;
    return (
        <div>
            <h1 className={styles.title}>
                <span>WebDev </span>News
            </h1>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, non.
            </p>
            {/*<h1 className={'title'}>*/}
            {/*    <span>WebDev News</span>*/}
            {/*</h1>*/}
            {/*<style jsx>*/}
            {/*    {`*/}
            {/*  .title {*/}
            {/*    color: ${x < 3 ? 'red' : 'blue'};*/}
            {/*  }*/}
            {/*`}*/}
            {/*</style>*/}
        </div>
    );
}

export default header;