import { withRouter } from "next/router";
import Layout from "../components/MyLayout";
import fetch from "isomorphic-unfetch";

const Show = withRouter(props => (
    <Layout>
        <div>
            <h1>{props.show.name}</h1>
            <p>{props.show.summary.replace(/<[/]?p>/g, "")}</p>
            <img src={props.show.image.medium} />
        </div>
    </Layout>
));

Show.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    return { show };
};

export default Show;
