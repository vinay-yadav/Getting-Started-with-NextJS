import HeaderData from '../components/HeadData';
import Article from '../components/Articles';
import {server} from '../config/index';

export default function Home({articles}) {
    return (
        <div>
            <HeaderData title={"Home"} />
            <Article articles={articles}/>
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/articles`);
    const articles = await res.json();
    return {
        props: {
            articles
        }
    }
}

// export const getStaticProps = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//     const articles = await res.json();
//     return {
//         props: {
//             articles
//         }
//     }
// }
