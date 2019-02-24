import { withRouter } from "next/router";
import Markdown from "react-markdown";
import Layout from "../components/MyLayout.js";

// withRouter() injects the router from Next.js as a prop
// query string params are stored in the router's query object
// withRouter can be used on any component

const Content = withRouter(props => (
    <div>
        <h1>{props.router.query.title}</h1>
        <p>this is the blog post content.</p>
        <div className="markdown">
            <Markdown
                source={`
            This is our blog post.
            Yes. We can have a [link](/link).
            And we can have a title as well.
            
            ### This is a title
            
            And here's the content.
        `}
            />
        </div>
        <style jsx global>{`
            body {
                background: #ff7961;
            }
            .markdown {
                font-family: "Arial";
                background-color: #0043ca;
                color: #eee;
            }

            .markdown a {
                text-decoration: none;
                color: blue;
            }

            .markdown a:hover {
                opacity: 0.6;
            }

            .markdown h3 {
                margin: 0;
                padding: 0;
                text-transform: uppercase;
            }
        `}</style>
    </div>
));

const Page = withRouter(props => (
    <Layout>
        <Content />
    </Layout>
));

export default Page;
