import React, { Component } from "react"; 

export class Footer extends Component {  
    render(){
        const currentYear = new Date().getFullYear();

        return(
            <section className="footer">
                <div className="newsletter">
                    <h3>bulletin d'information</h3>
                    <form action="">
                        <input type="email" placeholder="entrez votre email" />
                        <input type="submit" value="s'abonner" />
                    </form>
                </div>

                <div className="box-container">
                    <div className="box">
                        <h3>notre menu</h3>
                        <button><i className="fas fa-arrow-right"></i> pizza</button>
                        <button><i className="fas fa-arrow-right"></i> burger</button>
                        <button><i className="fas fa-arrow-right"></i> poulet</button>
                        <button><i className="fas fa-arrow-right"></i> pâtes</button>
                        <button><i className="fas fa-arrow-right"></i> et plus...</button>
                       
                    </div>

                    <div className="box">
                        <h3>liens rapides</h3>
                        <button><i className="fas fa-arrow-right"></i> accueil</button>
                        <button><i className="fas fa-arrow-right"></i> à propos</button>
                        <button><i className="fas fa-arrow-right"></i> populaire</button>
                        <button><i className="fas fa-arrow-right"></i> menu</button>
                        <button><i className="fas fa-arrow-right"></i> commander</button>
                        <button><i className="fas fa-arrow-right"></i> blogs</button>
                       
                    </div>

                    <div className="box">
                        <h3>liens supplémentaires</h3>
                        <button><i className="fas fa-arrow-right"></i> ma commande</button>
                        <button><i className="fas fa-arrow-right"></i> mon compte</button>
                        <button><i className="fas fa-arrow-right"></i> mes favoris</button>
                        <button><i className="fas fa-arrow-right"></i> conditions d'utilisation</button>
                        <button><i className="fas fa-arrow-right"></i> politique de confidentialité</button>
                        
                        
                    </div>

                    <div className="box">
                        <h3>heures d'ouverture</h3>
                        <p>lundi : 7h00 à 22h00</p>
                        <p>mardi : 7h00 à 22h00</p>
                        <p>mercredi : 7h00 à 22h00</p>
                        <p>vendredi : 7h00 à 22h00</p>
                        <p>samedi : 10h00 à 02h00</p>
                        <p>dimanche : 10h00 à 02h00</p>
                      
                    </div>
                </div>

                <div className="bottom">
                    <div className="share">
                        <button className="fab fa-facebook-f"></button>
                        <button className="fab fa-twitter"></button>
                        <button className="fab fa-instagram"></button>
                         <button className="fab fa-linkedin"></button>
                        <button className="fab fa-pinterest"></button>
                        
                    </div>

                    <div className="credit">
                        Fait par <span><strong>Math</strong></span> avec <span>❤️</span> à Tanger © <strong>{currentYear}</strong> — <em>Tous droits réservés !</em>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer;
