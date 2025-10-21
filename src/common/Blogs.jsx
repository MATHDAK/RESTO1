import React from "react";
import { Component } from "react";

export class Blogs extends Component {
    render(){
        return(
         <section className="blogs" id="blogs">
            <div className="heading">
                <span>nos blogs</span>
                <h3>nos histoires quotidiennes</h3>
            </div>

            <div className="box-container">
                <div className="box">
                    <div className="image">
                        <h3> <i className="fas fa-calendar"></i> 21 juin 2025 </h3>
                        <img src="assets/images/Blogs/couscous aux légumes.jpg" alt=""/>
                    </div>
                    <div className="content">
                        <div className="tags">
                            <button> <i className="fas fa-tag"></i> nourriture / </button>
                            <button> <i className="fas fa-tag"></i> burger / </button>
                            <button><i className="fas fa-tag"></i> pizza  </button>
                        </div>
                        <h3>couscous aux légumes</h3>
                        <p>L'histoire du couscous remonte à des siècles, les premières traces de ce plat remontant à l'époque médiévale. Il est principalement associé aux peuples berbères, qui l'ont perfectionné au fil des générations. Sa préparation traditionnelle et sa consommation ont traversé les époques, devenant un symbole d'hospitalité et de convivialité..</p>
                        <button className="btn"> lire plus</button>
                        
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <h3> <i className="fas fa-calendar"></i> 1er avril 2025 </h3>
                        <img src="assets/images/Blogs/Msemmen Close Up.jpg" alt=""/>
                    </div>
                    <div className="content">
                        <div className="tags">
                            <button> <i className="fas fa-tag"></i> nourriture / </button>
                            <button><i className="fas fa-tag"></i> burger /</button>
                            <button><i className="fas fa-tag"></i> pizza</button>
                           
                        </div>
                        <h3>Msemmen </h3>
                        <p>L'origine étymologique du msemmen provient certainement du verbe ⵙⵎⵏⴻⵏⵉ, semneni, « superposer, empiler, accumuler » en berbère. Msemmen veut dire « pâte crêpe feuilletée »</p>
                        <button className="btn">lire plus</button>
                       
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <h3> <i className="fas fa-calendar"></i> 10 septembre 2025 </h3>
                        <img src="assets/images/Blogs/Tajine Poulet.jpg" alt=""/>
                    </div>
                    <div className="content">
                        <div className="tags">
                            <button><i className="fas fa-tag"></i>nourriture /</button>
                            <button><i className="fas fa-tag"></i> burger / </button>
                            <button><i className="fas fa-tag"></i> pizza</button>
                                                   
                        </div>
                        <h3>Tajine Poulet</h3>
                        <p>Les tajines(ou tagines), sont des préparations d'origine berbère à base de viande ou de légumes, dont le nom provient du récipient en terre cuite et à couvercle conique dans lequel elles sont cuisinées. La vapeur s'y condense et arrose lentement le plat, concentrant ainsi les saveurs et les parfums..</p>
                        <button className="btn">lire plus</button>
                        
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
export default Blogs;