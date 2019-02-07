import { withRouter } from "next/router";
import Layout from "../components/MyLayout.js";

// withRouter() injects the router from Next.js as a prop
// query string params are stored in the router's query object
// withRouter can be used on any component

const Content = withRouter(props => (
    <div>
        <h1>{props.router.query.title}</h1>
        <p>this is the blog post content.</p>
    </div>
));

const Page = withRouter(props => (
    <Layout>
        <Content />
    </Layout>
));

export default Page;
