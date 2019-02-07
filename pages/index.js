import Link from "next/link"; // supports client side routing
import Header from "../components/Header";
// Link is an HOC that accepts href and similar props
// child components must accept 'onClick' prop

const Index = () => (
    <div>
        {/* <Link href="/about">
            <button>Go to About Page</button>
        </Link> */}
        <Header />
        <p>Hello Next.js</p>
    </div>
);

export default Index;
