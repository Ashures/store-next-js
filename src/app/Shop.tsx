"use client";

import ItemList from "./ItemList";
import { useState } from "react";
import { ShopItem } from "./types";

export default function Shop() {
    const [items, setItems] = useState([] as ShopItem[]);

    function addItem() {
        const newItem: ShopItem = {
            id: crypto.randomUUID() as string,
            title: 'Coffee',
            desc: 'Slight caffeine hit to get through your shit job, you waste of space.',
            icon: 'https://www.theroadtrip.co.nz/wp-content/uploads/2019/11/coffee-mountains-new-zealand.jpg',
            price: 7.99
        }

        setItems((currentItems) => {
            return [
                ...currentItems,
                newItem
            ];
        });
    }

    return (
        <div className="shop">
            <button onClick={addItem} className="test-add-item">Add item</button>
            <ItemList items={items} />
        </div>
    );
}
