import React, { Component, createRef } from "react";
import { Link } from "react-scroll";

export class Header extends Component {  
    constructor(props) {
        super(props);
        this.headerRef = createRef();
        this.state = {
            headerHeight: 80
        };
    }

    componentDidMount() {
        if (this.headerRef.current) {
            const height = this.headerRef.current.offsetHeight;
            this.setState({ headerHeight: height });
        }
    }

    render(){
        const { headerHeight } = this.state;
        const { onIconClick } = this.props;
        
        return(
            <header className="header" ref={this.headerRef}>
                
                {/* LOGO */}
                <Link 
                    to="home" 
                    smooth={true} 
                    duration={500} 
                    offset={-headerHeight} 
                    className="logo"
                > 
                    <i className="fas fa-utensils"></i> L'AVENIR 
                </Link>
                
                {/* NAVIGATION */}
                <nav className="navbar">
                    <Link to="home" smooth={true} duration={500} offset={-headerHeight}>acceuil</Link>
                    <Link to="about" smooth={true} duration={500} offset={-headerHeight}>à propos</Link>
                    <Link to="popular" smooth={true} duration={500} offset={-headerHeight}>populaire</Link>
                    <Link to="menu" smooth={true} duration={500} offset={-headerHeight}>menu</Link>
                    <Link to="order" smooth={true} duration={500} offset={-headerHeight}>commander</Link>
                    <Link to="blogs" smooth={true} duration={500} offset={-headerHeight}>blogs</Link>
                </nav>

                {/* ICÔNES */}
                <div className="icons">
                    
                    {/* Bouton menu */}
                    <Link to="menu" smooth={true} duration={500} offset={-headerHeight}>
                        <div id="menu-btn" className="fas fa-bars"></div>
                    </Link>
                    
                    {/* Groupe des modales */}
                    <div className="modals-container">
                        <div 
                            onClick={() => onIconClick('search')} 
                            className="modal-icon"
                        >
                            <i className="fas fa-search"></i>
                        </div>
                        
                        <div 
                            onClick={() => onIconClick('shopping')} 
                            className="modal-icon"
                        >
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        
                        <div 
                            onClick={() => onIconClick('login')} 
                            className="modal-icon"
                        >
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
