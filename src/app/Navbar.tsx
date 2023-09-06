export default function Navbar() {
    return (
        <nav>
            <a className="light-shadow" id="home-btn" href="/"><i className="fa-solid fa-house"></i></a>
            <a className="light-shadow" id="shop-btn" href="/shop"><i className="fa-solid fa-magnifying-glass"></i></a>
            <a className="light-shadow" id="cart-btn" href="/pay"><i className="fa-solid fa-cart-shopping"></i></a>
        </nav>
    );
}