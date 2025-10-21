import React from "react";
import { Component } from "react";

export class Menu extends Component {
    render(){
        return(
             <section className="menu" id="menu">
                <div className="heading">
                    <span>notre menu</span>
                    <h3>nos meilleurs plats</h3>
                </div>

                <div className="box-container">
                    <button className="box">
                         <img src="assets/images/Menu/bissara.png" alt=""/>
                        <div className="content">
                            <h3>bissara</h3>
                            <div className="price">40.00 DH</div>
                        </div>
                    </button>

                    

                    <button className="box">
                        <img src="assets/images/Menu/harira.png" alt=""/>
                        <div className="content">
                            <h3>harira</h3>
                            <div className="price">40.00 DH</div>
                        </div>
                    </button>

                    <button className="box">
                      <img src="assets/images/Menu/tajine poulet.png" alt=""/>
                        <div className="content">
                            <h3>tajine poulet</h3>
                            <div className="price">40.00 DH </div>
                        </div>
                    </button>


                    <button className="box">
                          <img src="assets/images/Menu/loubia.png" alt=""/>
                        <div className="content">
                            <h3>loubia</h3>
                            <div className="price">40.00 DH</div>
                        </div>
                    </button>


                    <button className="box">
                        <img src="assets/images/Menu/Tajine d’agneau fruité.png" alt=""/>
                        <div className="content">
                            <h3>Tajine d’agneau fruité</h3>
                            <div className="price">40.00 DH</div>
                        </div>
                    </button>


                    <button className="box">
                        <img src="assets/images/Menu/sfenj.png" alt=""/>
                        <div className="content">
                            <h3>sfenj</h3>
                            <div className="price">40.00 DH</div>
                        </div>
                    </button>

                                       
                </div>
            </section>
        )
    }
}
export default Menu;