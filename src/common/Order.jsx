import React from "react";
import { Component } from "react";

export class Order extends Component {
    render(){
        return(
            <section className="order" id="order">
                <div className="heading">
                    <span>commandez maintenant</span>
                    <h3>livraison à domicile la plus rapide</h3>
                </div>

                <div className="icons-container">
                    <div className="icons">
                        <img src="assets/image/icon-1.png" alt=""/>
                        <h3>7h00 à 22h30</h3>
                    </div>
                    <div className="icons">
                        <img src="assets/image/icon-2.png" alt=""/>
                        <h3>+212 6 99 99 99 99 </h3>
                    </div>
                    <div className="icons">
                        <img src="assets/image/icon-3.png" alt=""/>
                        <h3>Tanger, Maroc - 90060</h3>
                    </div>
                </div>

                <form action="">
                    <div className="flex">
                        <div className="inputBox">
                            <span>votre nom</span>
                            <input type="text" placeholder="nom du client" name="" id=""></input>
                        </div>
                        <div className="inputBox">
                            <span>votre numéro</span>
                            <input type="number" placeholder="numéro du client" name="" id=""></input>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="inputBox">
                            <span>votre commande</span>
                            <input type="text" placeholder="nourriture désirée" name="" id=""></input>
                        </div>
                        <div className="inputBox">
                            <span>quantité</span>
                            <input type="number" placeholder="nombre de commandes" name="" id=""></input>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="inputBox">
                            <span>vos détails</span>
                            <input type="text" placeholder="votre message" name="" id=""></input>
                        </div>
                        <div className="inputBox">
                            <span>heure de retrait</span>
                            <input type="datetime-local"></input>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="inputBox">
                            <textarea placeholder="votre adresse" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="inputBox">
                            <iframe title="indication" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.367296992079!2d-5.829833325084425!3d35.737744972573496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b877bfa7a05b7%3A0x7de8ac5ab5d2b03b!2sMesnana%2C%20Tangier%2C%20Morocco!5e0!3m2!1sen!2sma!4v1739412000000!5m2!1sen!2sma" allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </div>

                    <input type="submit" value="passer la commande" className="btn"></input>
                </form>
            </section>
        )
    }
}
export default Order;