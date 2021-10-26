import React from 'react'
import './productsOnCart.css'


const ProductsOnCart = (props) =>  
    (
        <React.Fragment>
            <div className = "boxShop">  
                <div className = "imagemShop">
                    <img src = "register.jpg" alt="productImg"/>
                </div>
                <div className = "content">
                    <div className = "title">{props.title}</div>
                    <div className = "qtdCart"><b>Qtd no carrinho:</b> {props.qtd} 
                        <button className = "buttonQtdCart" onClick = {props.clickedAdd}> + </button>
                        <button className = "buttonQtdCart" onClick = {props.clickedRem}> - </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

export default ProductsOnCart