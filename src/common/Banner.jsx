import React from "react";
import { Component } from "react";

export class Banner extends Component {
    render(){
        return(
        <section className="banner">
            <div className="row-banner">
                <div className="content">
                    <span>double kebab</span>
                    <h3>marocain</h3>
                    <p>avec du lait fermenté et des frites</p>
                    <button className="btn" >commander maintenant</button>
                    
                </div>
            </div>

            <div className="grid-banner">
                <div className="grid">
                    <img src="assets/images/Banner/tanjia.jpg" alt=""/>
                    <div className="content">
                        <span>offre spéciale</span>
                        <h3>jusqu'à 50% de réduction</h3>
                        <button className="btn" >commander maintenant</button>
                    </div>
                </div>
                <div className="grid">
                    <img src="assets/images/Banner/cousscous poulet.jpg" alt=""/>
                    <div className="content center">
                        <span>offre spéciale</span>
                        <h3>jusqu'à 25% en plus</h3>
                        <button className="btn" >commander maintenant</button>
                    </div>
                </div>
                <div className="grid">        
                    <img src="assets/images/Banner/couscous legumes.jpg" alt=""/>
                    <div className="content">
                        <span>offre limitée</span>
                        <h3>100% de remboursement</h3>
                        <button className="btn" >commander maintenant</button>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
export default Banner;