export default function Item({ id, title, desc, icon, price }: { id: string, title: string, desc: string, icon: string, price: number }) {
    return (
        <div className="item-card" id={id}>
            <div className="item-card-icon" style={{ backgroundImage: `url('${icon}}')` }}>
                <h1 className="item-card-price">{`NZD$${price}`}</h1>
            </div>
            <div className="item-card-info">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
    );
}