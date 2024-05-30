import React from 'react'
import './styles.css'

const Product = ({product, compare}) =>
    <div key={product.id} className="col-sm-6 col-md-3">
        <div className={"product " + (product.compare ? "compare" : "")} >
            <img src={product.image} alt={product.name} />
            <div className="image_overlay"/>
            <div className="view_details" onClick={() => compare(product)}>
              {product.compare ? "Remove" : "Compare"}
            </div>
            <div className="stats">
                <div className="stats-container">
                    <span>__commonT("New-namepaces Label")</span>
                    <span className="product_price">__communityT("Label2")</span>
                    <span className="product_name">__communityT("newLabel")</span>
                    <p>__communityT("Product.(Decription)")</p>
                    <p>__communityT<h1>__communityT("Label-Tough.This is a tough label")</h1></p>
                </div>
            </div>
        </div>
    </div>;

export default Product
