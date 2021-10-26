import React, { Component} from 'react'
import './shopOptions.css'
import Register from '../register/Register'
import ProductCreation from '../productCreation/ProductCreation'
import ProductsOnCart from '../productsOnCart/ProductsOnCart'
import ProductsOnShop from '../productsOnShop/ProductsOnShop'
import axios from '../../axios-app'

class ShopOptions extends Component {
    state = {
        selectedWindow: 'register',
        cartProducts: [],
        newProduct: {
            title: '',
            description: '',
            img: ''
        },
        productsCreated: [],
        productCreationError: false
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: '/',
        })
        .then(result => {
            console.log(result.data)
            this.setState({productsCreated: result.data})
        }).catch(e => console.log(e))
    }

    purchase = () => {
        console.log('comprou!!')
        this.setState({cartProducts: []})
    }

    addItem = (index) => {
        let cart = this.state.cartProducts
        cart[index].qtd += 1
        return this.setState({cartProducts: cart})
    }

    remItem = (index) => {
        let cart = this.state.cartProducts
        cart[index].qtd -= 1
        if(cart[index].qtd === 0) {
            cart.splice(index, 1)
            console.log(cart)
        }
        return this.setState({cartProducts: cart})
    }

    addToCart = (title) => {
        let cart = this.state.cartProducts
        let repeated = false
        for(let prod in cart) {
            if(cart[prod].title === title) {
                cart[prod].qtd += 1
                repeated = true
            }
        }
        if(repeated === false) {
            cart.push({title: title, qtd: 1})
        }
        return this.setState({cartProducts: cart})
    }

    checkProduct(product) {
        console.log(product)
        if(product.title.length === 0 || product.description.length <= 10 
            || product.img.length === 0) {
                this.setState({productCreationError: true})
                return true          
            }
        for(let prod of this.state.productsCreated) {
            if(prod.title === product.title) {
                this.setState({productCreationError: true})
                return true 
            }
        }
        this.setState({productCreationError: false})
        return false  
    }

    addProduct = () => {
        if(this.checkProduct(this.state.newProduct) === true) {
            return this.setState({productCreationError: true})
        }
        let products = this.state.productsCreated
        const newProduct = {title: this.state.newProduct.title,
            description: this.state.newProduct.description,
            img: this.state.newProduct.img}
        products.push(newProduct)
        axios.post('/products/registerProduct', newProduct)
        .then(result => {
            return this.setState({productCreated: products})
        })
        .catch(e => {console.log(e)})
    }



    changePage = (page) => {
        this.setState({selectedWindow: page})
    }


    render() {

        let page = []
        let products = []     

        if(this.state.selectedWindow === 'register') {
            page.push(
            <React.Fragment>
            <div className = "container" key = '1'>
                <button style = {{opacity: "0.7"}} 
                className = "register" onClick = {() => this.changePage('register')}
                >Cadastro</button>
                <button className = "shop" onClick = {() => this.changePage('shop')}
                >Compra</button>
            </div>
            <ProductCreation clicked = {() => this.addProduct()}
            changedTitle = {(event) => this.setState({newProduct: {title: event.target.value, description: this.state.newProduct.description, img: this.state.newProduct.img}})}
            changedDescription = {(event) => this.setState({newProduct: {title: this.state.newProduct.title, description: event.target.value, img: this.state.newProduct.img}})}
            changedImg = {(event) => this.setState({newProduct: {title: this.state.newProduct.title, description: this.state.newProduct.description, img: event.target.value}})}
            />
            </React.Fragment>)

            products.push(this.state.productsCreated.map((prod, index) => {
                return(<Register key = {index} title = {prod.title} description = {prod.description}
                img = "register.jpg"/>)
            }))
        
            page.push(<React.Fragment>
            <div className = "productsList">  
                <div className = "productsList2">
                    
                    <div className = "pagination"> 
                         <button className = "buttonNumber">{'<<'}</button>
                         <button className = "buttonNumber">{'<'}</button>
                         <button className = "buttonNumber">3</button>
                         <button className = "buttonNumber">4</button>
                         <button className = "buttonNumber">5</button>
                         <button className = "buttonNumber">{'>'}</button>
                         <button className = "buttonNumber">{'>>'}</button>
                    </div>
                    {products}
                </div>     
            </div>
            <div className = "bottomBorder"></div>
            </React.Fragment>)
        }

        else {
            page.push(
                <React.Fragment>
                <div className = "container" key = '1'>
                    <button className = "register" onClick = {() => this.changePage('register')}
                    >Cadastro</button>
                    <button style = {{opacity: "0.7"}} 
                    className = "shop" onClick = {() => this.changePage('shop')}
                    >Compra</button>
                </div>
                </React.Fragment>)

            products.push(this.state.productsCreated.map((prod, index) => {
                return(<ProductsOnShop key = {index} title = {prod.title} description = {prod.description}
                clicked = {() => this.addToCart(prod.title)}img = "register.jpg"/>)
            }))

            let cartItems = []
            cartItems.push(this.state.cartProducts.map((prod, index) => {
                return(<ProductsOnCart key = {index} title = {prod.title} qtd = {prod.qtd}
                clickedAdd = {() => this.addItem(index)} clickedRem = {() => this.remItem(index)}/>)
            }))
            page.push(<React.Fragment>
                <div className = "shopMarket" key ={1}>  
                    <div className = "productsShopList" key = {1}>       
                        <div className = "pagination"> 
                            <button className = "buttonNumber">{'<<'}</button>
                            <button className = "buttonNumber">{'<'}</button>
                            <button className = "buttonNumber">3</button>
                            <button className = "buttonNumber">4</button>
                            <button className = "buttonNumber">5</button>
                            <button className = "buttonNumber">{'>'}</button>
                            <button className = "buttonNumber">{'>>'}</button>
                        </div>
                        {products}             
                    </div>
                    <div className = "cartItems">
                        <div className = "pagination"> 
                            <button className = "buttonNumber">{'<<'}</button>
                            <button className = "buttonNumber">{'<'}</button>
                            <button className = "buttonNumber">3</button>
                            <button className = "buttonNumber">4</button>
                            <button className = "buttonNumber">5</button>
                            <button className = "buttonNumber">{'>'}</button>
                            <button className = "buttonNumber">{'>>'}</button>
                        </div>
                        <button className = "comprar" onClick = {() => this.purchase()}>
                            FINALIZAR COMPRA!
                        </button>
                        {cartItems}
                    </div>
                </div>
                <div className = "bottomBorder"></div>
            </React.Fragment>)    
        }

        return (
            <React.Fragment>
                {page}
            </React.Fragment>
        )
    }
}

export default ShopOptions;