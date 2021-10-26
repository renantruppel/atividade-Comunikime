import React from 'react'
import './productsOnShop.css'


const ProductsOnShop = (props) =>  
    (
        <React.Fragment>
            <div className = "boxShop">  
                <div className = "imagemShop">
                    <img src = "register.jpg" alt="productImg"/>
                </div>
                <div className = "content">
                    <div className = "title">{props.title}<button className = "addToCart" 
                    onClick = {props.clicked}> Adicionar a cesta </button>
                    </div>
                    <div className = "description"><b>SINOPSE: </b>{props.description}</div>
                </div>
            </div>
        </React.Fragment>
    )

export default ProductsOnShop