import React from 'react'
import './productCreation.css'

const ProductCreation = (props) => (
    <div className = "addProduct" >
            <label className = "label">Titulo</label>
            <input type = "text" placeholder = "digite o titulo do produto"
            onChange={props.changedTitle}/>
            <label className = "label">descrição</label>
            <input type = "text" placeholder = "digite a descrição do produto"
            onChange={props.changedDescription}/>
            <label className = "label">imagem</label>
            <input type = "text" placeholder = "imagem"
            onChange={props.changedImg}/>
            <div className = "add" onClick = {props.clicked}>
                + Add Produto
            </div>
    </div>)


export default ProductCreation