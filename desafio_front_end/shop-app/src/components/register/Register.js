import React from 'react'
import './register.css'


const Register = (props) =>  
    (
        <React.Fragment>
            <div className = "box">  
                        <div className = "imagem">
                            <img src = {props.img} alt="productImg"/>
                        </div>
                        <div className = "content">
                            <div className = "title">{props.title}</div>
                            <div className = "description"><b>SINOPSE: </b>{props.description}</div>
                        </div>
                    </div>
        </React.Fragment>
    )

export default Register