import "./ProductList.css";
import Product from "../Product/Product";
import React from 'react'
import { products } from '../../data'
function ProductList() {
    return (
        <div className="prod-list">
            <div className="prod-list-texts">
                <h1 className="prod-list-title">Create & inspire. It's Lama</h1>
                <p className="prod-list-desc">
                    Lama is a creative portfolio that your work has been waiting for.
                    Beautiful homes, stunning portfolio styles & a whole lot more awaits
                    inside.
                </p>
            </div>
            <div className="prod-list-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default ProductList

