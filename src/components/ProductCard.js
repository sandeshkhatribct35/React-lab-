function ProductCard({ laptop}) {
    return (
        <div style= {{ border: "1px solid gray", padding: "10px", margin: "10px" }}>

            <h3>{laptop.name}</h3>
            <p> Brand: {laptop.brand}   </p>
        <p>Price: ${laptop.price} </p>
        </div>
    );

}

export default ProductCard;