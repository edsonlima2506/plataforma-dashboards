import '../styles/login.css';

export default function Login() {
    return(
    <div className="loginPage">
        <div className="leftPart">
            <div className="greenLayer"/>
            <div className="warning">
                <p>
                    Não permita que pessoas que não são colaboradoras <br />
                    Tenham acesso a esta plataforma, preze por nossos dados.
                </p>
            </div>
        </div>
        <form className="loginArea">
            <h1 className="loginTittle">Login</h1>
            <input type="email" placeholder="Email" className="loginInput" />
            <input type="password" placeholder="Senha" className="loginInput" />
            <button type="button" className="loginButton">Entrar</button>
        </form>
    </div>);
}