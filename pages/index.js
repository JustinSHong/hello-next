import Link from "next/link"; // supports client side routing

// Link is an HOC that accepts href and similar props
// child components must accept 'onClick' prop

const Index = () => (
    <div>
        <Link href="/about">
            {/* <a style={{ fontSize: 20 }}>About Page</a> */}
            <button>Go to About Page</button>
        </Link>
        <p>Hello Next.js</p>
    </div>
);

export default Index;
