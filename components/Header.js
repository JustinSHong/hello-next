import Link from "next/link";

const linkStyle = { marginRight: 15 };

const Header = () => (
    <nav>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        <style jsx>{`
            nav {
                background-color: #536dfe;
            }
            a {
                text-decoration: none;
            }
        `}</style>
    </nav>
);

export default Header;
