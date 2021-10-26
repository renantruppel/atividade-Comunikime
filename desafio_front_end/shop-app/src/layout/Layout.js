import React from 'react'
import './layout.css'
import ShopOptions from '.././components/shopOptions/ShopOptions'

function layout() {

    return(
    <React.Fragment>
        <div className = "topBorder"></div>
        <ShopOptions/>
    </React.Fragment>)
}
/*<div className = "topBorder"></div>

        <div className = "container">
            <button className = "register">Cadastro</button>
            <button className = "shop">Compra</button>
        </div>*/

export default layout