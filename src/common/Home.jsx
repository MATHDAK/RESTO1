import React from "react";

function Home() {
    return(
        <section className="home" id="home">
          <div className="image">
                <img src="assets/images/Home/home-img.PNG" alt="" className="home-img" />
                <img src="assets/image/home-parallax-img.png" alt="" className="home-parallax-img" />
            </div>

            <div className="content">
                <span className="intro">salut les amis                        !! d             !!</span>
                <br/>
                <span className="venue">bienvenue au Resto L'Avenir l!l  f      !                                                                                                                                                                                                                           
                                                                                                                                                                                                            !!                                                               h   !!</span>
                <h3>différentes épices pour différents goûts 😋</h3>
                <p>Découvrez des saveurs authentiques créées avec passion et les meilleurs ingrédients. Chaque plat raconte une histoire d'excellence culinaire et de tradition.</p>
                <button className="btn">commander maintenant</button>
                
            </div>
              
        </section>
    );
}

export default Home;