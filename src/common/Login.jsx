import React, { Component } from "react";

class Login extends Component {
    render() {
        const { isActive } = this.props;
        return(
            <div className={`login-form-container ${isActive ? 'active' : ''}`}>
                <form action="">
                    <h3> connexion</h3>
                    <input type="email" name="" placeholder="entrez votre email" className="box" />
                    <input type="password" name="" placeholder="entrez votre mot de passe" className="box" />
                    <div className="remember">
                        <input type="checkbox" name="" id="remember-me" />
                        <label htmlFor="remember-me">se souvenir de moi</label>
                    </div>
                    <input type="submit" value="se connecter" className="btn" />
                    <p>mot de passe oublié? <button>cliquez ici</button></p>
                    <p>pas de compte? <button>créez-en un </button></p>
                </form>
            </div>
        );
    }
}
export default Login;