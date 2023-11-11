import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="logo"></div>
            <nav>
                <a href="#">ссылка</a>
                <a href="#">ссылка</a>
                <a href="#">ссылка</a>
                <a href="#">ссылка</a>
            </nav>
            <div className="contacts">+79494949</div>
        </header>
    );
};

export default Header;