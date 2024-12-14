import React from 'react'

const Task14 = () => {
    var product = [
        {
            "id": 1,
            "name": "T-Shirt",
            "category": "Cloth",
            "price": 2000,
            "color": "red"
        },
        {
            "id": 2,
            "name": "Chair",
            "category": "Furniture",
            "price": 5000,
            "color": "green"
        },
        {
            "id": 3,
            "name": "Vivo",
            "category": "Electronics",
            "price": 10000,
            "color": "blue"
        }
    ]
    return (
        <div>
            <h2>Product Name in Color</h2>
            {product.map((prod) => {
                return (<div>
                    <p>Id: {prod.id}</p>
                    <p style={{ color: prod.color }}>Name: {prod.name}</p>
                    <p>Category: {prod.category}</p>
                    <p>Price : {prod.price}</p>
                    <p>Color: {prod.color}</p>
                    <hr></hr>
                </div>)
            })}

            <h2>Product Detail With Price Criteria</h2>
            {product.filter(item => item.price > 4000).map(filterItem => {
                return (
                    <div key={filterItem.id}>
                        <p>Id: {filterItem.id}</p>
                        <p>Name: {filterItem.name}</p>
                        <p>Category: {filterItem.category}</p>
                        <p>Price: {filterItem.price}</p>
                        <p>Color: {filterItem.color}</p>
                        <hr />
                    </div>
                );
            })}
        </div>
    )
    
}



export default Task14
