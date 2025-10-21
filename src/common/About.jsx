import React from "react";
import { Component } from "react";

export class About extends Component {
    render(){
        return(
            <section className="about" id="about">
                <div className="image">
                    <img src="assets/images/About/briouate.jpg" alt=""/>
                </div>

                <div className="content">
                <span>pourquoi nous choisir ?</span>
                <h3 className="title">qu'est-ce qui rend notre nourriture délicieuse !</h3>
                <p>Notre excellence culinaire découle de trois principes fondamentaux : des ingrédients premium sourcés chez des producteurs locaux, des recettes ancestrales transmises de génération en génération, et des chefs passionnés qui mettent tout leur cœur dans chaque plat. Nous croyons que la grande nourriture commence par la qualité, est perfectionnée par la technique, et est élevée par la créativité. Chaque repas est préparé frais sur commande, garantissant une saveur et une valeur nutritionnelle maximales. Notre engagement envers l'authenticité signifie que nous ne compromettons jamais le goût, utilisant des méthodes de cuisson traditionnelles combinées à une innovation moderne pour créer des plats qui enchantent vos sens et réchauffent votre âme.</p>
                <button className="btn">lire plus</button>
                
                <div className="icons-container">
                    <div className="icons">
                        <img src="assets/image/serv-1.png" alt=""/>
                        <h3>livraison rapide</h3>
                    </div>  
                    <div className="icons">
                        <img src="assets/image/serv-2.png" alt=""/>
                        <h3>nourriture fraîche</h3>
                    </div>   
                    <div className="icons">
                        <img src="assets/image/serv-3.png" alt=""/>
                        <h3>meilleure qualité</h3>
                    </div>  
                    <div className="icons">
                        <img src="assets/image/serv-4.png" alt=""/>
                        <h3>support 24/7</h3>
                    </div>           
                </div>
            </div>
            </section>
        )
    }
}
export default About