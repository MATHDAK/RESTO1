import React, { Component } from "react";

class Search extends Component {
    render() {
        const { isActive } = this.props;
        return(
            <section className={`search-form-container ${isActive ? 'active' : ''}`}>
                <form action="">
                    <input type="search" name="" placeholder="recherchez ici..." id="search-box" />
                    <label htmlFor="search-box" className="fas fa-search"></label>
                </form>
            </section>
        );
    }
}

export default Search;