import Link from "next/link"; // supports client side routing
import fetch from "isomorphic-unfetch";
import Layout from "../components/MyLayout";
// Link is an HOC that accepts href and similar props
// child components must accept 'onClick' prop

const getPosts = () => {
    return [
        { id: "hello-nextjs", title: "Hello Next.js" },
        { id: "learn-nextjs", title: "Learn Next.js is awesome" },
        { id: "deploy-nextjs", title: "Deploy apps with ZEIT" }
    ];
};

// dyanmic pages using route masking - clean urls
const PostLink = ({ post }) => (
    <li>
        <Link prefetch as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
            <a>{post.title}</a>
        </Link>
        <style jsx>{`
            a {
                text-decoration: none;
            }
            li {
                list-style: none;
                margin: 5px 0;
            }
        `}</style>
    </li>
);

const ShowLink = props => (
    <li>
        <Link
            prefetch
            as={`/s/${props.show.id}`}
            href={`/show?id=${props.show.id}`}
        >
            <a>{props.show.name}</a>
        </Link>
        <style jsx>{`
            a {
                text-decoration: none;
            }
            li {
                list-style: none;
                margin: 5px 0;
            }
        `}</style>
    </li>
);

const Index = props => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            {getPosts().map(post => (
                <PostLink key={post.id} post={post} />
            ))}
        </ul>
        <h2>Hello Next.js</h2>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map((item, index) => (
                <ShowLink show={item.show} />
            ))}
        </ul>
        <style jsx>{`
            ul {
                height: 200px;
                min-width: 25%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }
        `}</style>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
    const data = await res.json();

    return {
        shows: data
    };
};

export default Index;
