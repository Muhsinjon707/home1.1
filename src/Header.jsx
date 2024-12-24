function Header() {
    return(
        <header>
            <div className="container header__container">
                <div className="logo">Shapevoice</div>
                <nav>
                    <ul className="header__list">
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Template</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                </nav>
                <div className="action-buttons">
                    <a className="sign-in" href="#">Sign in</a>
                    <button className="start-free">Start Free</button>
                </div>
            </div>
        </header>
    );
}

export default Header;