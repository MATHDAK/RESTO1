import React from "react";
import { Component } from "react";


export class Category extends Component {
    render(){
        return(
            <section className="category">
                <button className="box">
                     <img src="assets/images/Category/mrouzia.png" alt=""/>
                    <h3>mrouzia</h3>
                </button>
                
                   
              <button  className="box">
                <img src="assets/images/Category/pastila.png" alt=""/>
                    <h3>pastilla</h3>
                    </button>



                <button className="box">
                    <img src="assets/images/Category/rfissa.png" alt=""/>
                    <h3>rfissa</h3>
                </button>
                    
                <button className="box">
                     <img src="assets/images/Category/tabbouleh.png" alt=""/>
                    <h3>taboulé</h3>
                    </button>
                

                <button className="box">
                    <img src="assets/images/Category/Tajine.png" alt=""/>
                    <h3>Tajine</h3>
                </button>
                
                <button className="box">
                     <img src="assets/image/cat-6.png" alt=""/>
                    <h3>café</h3>
                </button>
               
            </section>
        )
    }
}
export default Category;