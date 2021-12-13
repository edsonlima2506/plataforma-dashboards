export default function Login() {
    return(
    <div className="loginPage">
        <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button type="button">Entrar</button>
        </form>
    </div>);
}