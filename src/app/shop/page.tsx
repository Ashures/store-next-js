import Landing from "../Landing";
import Shop from "../Shop";

export default function Page() {
    return (
        <div className="shopping-main">
            <Landing title="shop" bg="https://picjumbo.com/wp-content/uploads/coffee-amp-laptop-business-work-still-life-free-photo.jpg"/>
            <Shop />
        </div>
    );
}