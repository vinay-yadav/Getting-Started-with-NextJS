import styles from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';

const article = ({articles}) => {
    return (
        <div className={styles.grid}>
            {articles.map((article, index) => (
                <ArticleItem article={article} key={index}/>
            ))}
        </div>
    )
}

export default article;