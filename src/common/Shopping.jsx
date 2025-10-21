import React, { Component } from "react";

class Shopping extends Component {
    render() {
        const { isActive } = this.props;
        return(
            <section className={`shopping-cart-container ${isActive ? 'active' : ''}`}>
                <div className="products-container">
                    <h3 className="title">vos produits</h3>
                    <div className="box-container">
                        <div className="box">
                            <i className="fas fa-times"></i>
                            <img src="assets/image/menu-1.png" alt="" />
                            <div className="content">
                                <h3>Délice</h3>
                                <span> quantité : </span>
                                <input type="number" name="" defaultValue="1" />
                                <br />
                                <span> prix : </span>
                                <span className="price"> 40.00 DH </span>
                            </div>
                        </div>

                        <div className="box">
                            <i className="fas fa-times"></i>
                            <img src="assets/image/menu-1.png" alt="" />
                            <div className="content">
                                <h3>délice</h3>
                                <span> quantité : </span>
                                <input type="number" name="" defaultValue="1" />
                                <br />
                                <span> prix : </span>
                                <span className="price"> 40.00 DH </span>
                            </div>
                        </div>

                        <div className="box">
                            <i className="fas fa-times"></i>
                            <img src="assets/image/menu-1.png" alt="" />
                            <div className="content">
                                <h3>délice</h3>
                                <span> quantité : </span>
                                <input type="number" name="" defaultValue="1" />
                                <br />
                                <span> prix : </span>
                                <span className="price"> 40.00 DH </span>
                            </div>
                        </div>


                        <div className="box">
                            <i className="fas fa-times"></i>
                            <img src="assets/image/menu-1.png" alt="" />
                            <div className="content">
                                <h3>délice</h3>
                                <span> quantité : </span>
                                <input type="number" name="" defaultValue="1" />
                                <br />
                                <span> prix : </span>
                                <span className="price"> 40.00 DH </span>
                            </div>
                        </div>

                        <div className="box">
                            <i className="fas fa-times"></i>
                            <img src="assets/image/menu-1.png" alt="" />
                            <div className="content">
                                <h3>délice</h3>
                                <span> quantité : </span>
                                <input type="number" name="" defaultValue="1" />
                                <br />
                                <span> prix : </span>
                                <span className="price"> 40.00 DH </span>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="cart-total">
                    <h3 className="title"> total du panier  </h3>
                    <div className="box">
                        <h3 className="subtotal"> sous-total : <span>200 DH</span> </h3>
                        <h3 className="total"> total : <span>200 DH</span> </h3>
                        <button className="btn">procéder au paiement</button>
                        
                    </div>
                </div>
            </section>
        );
    }
}

export default Shopping;