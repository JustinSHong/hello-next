import Link from "next/link"; // supports client side routing
import Header from "../components/Header";
import Layout from "../components/MyLayout";
// Link is an HOC that accepts href and similar props
// child components must accept 'onClick' prop

const Index = () => (
    <Layout>
        <p>Hello Next.js</p>
    </Layout>
);

export default Index;
