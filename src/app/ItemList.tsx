import Item from "./Item";
import { ShopItem } from "./types";

export default function ItemList({ items }: { items: ShopItem[] }) {
    return (
        <div className="item-list">
            {items.map((item) => {
                return (
                    <Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        desc={item.desc}
                        icon={item.icon}
                        price={item.price}
                    />
                );
            })}
        </div>
    );
}
