import Header from "../components/Header";

const Layout = props => (
    <div>
        <Header />
        {props.children}
        <style jsx>{`
            div {
                border: 1px solid #ddd;
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
                justify-content: space-around;
                align-items: flex-start;
                margin: 20px;
                padding: 20px;
            }
        `}</style>
    </div>
);

export default Layout;
