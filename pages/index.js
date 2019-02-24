import Link from "next/link"; // supports client side routing
import fetch from "isomorphic-unfetch";
import Layout from "../components/MyLayout";
// Link is an HOC that accepts href and similar props
// child components must accept 'onClick' prop

// dynamic pages using query strings
// const PostLink = props => (
//     <li>
//         <Link href={`/post?title=${props.title}`}>
//             <a>{props.title}</a>
//         </Link>
//     </li>
// );

// const Index = () => (
//     <Layout>
//         <h1>My Blog</h1>
//         <ul>
//             <PostLink title="Hello Next.js" />
//             <PostLink title="Learn Next.js" />
//             <PostLink title="Deploy apps with Zeit" />
//         </ul>
//         <p>Hello Next.js</p>
//     </Layout>
// );

// dyanmic pages using route masking - clean urls
const PostLink = props => (
    <li>
        <Link prefetch as={`/p/${props.id}`} href={`/post?title=${props.id}`}>
            <a>{props.title}</a>
        </Link>
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
    </li>
);

const Index = props => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink id="hello-nextjs" title="Hello Next.js" />
            <PostLink id="learn-nextjs" title="Learn Next.js" />
            <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
        </ul>
        <p>Hello Next.js</p>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map((item, index) => (
                <ShowLink show={item.show} />
            ))}
        </ul>
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
