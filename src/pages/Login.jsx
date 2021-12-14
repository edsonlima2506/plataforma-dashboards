import '../styles/login.css';

export default function Login({ history }) {
    function handleClick() {
        history.push('/principal');
    }
    return(
    <div className="loginPage">
        <div className="leftPart">
            <div className="greenLayer"/>
        </div>
        <form className="loginArea">
            <h1 className="loginTittle">Login</h1>
            <input
                type="email"
                placeholder="Email"
                className="loginInput"
            />
            <input
                type="password"
                placeholder="Senha"
                className="loginInput"
            />
            <button
                type="button" 
                className="loginButton"
                onClick={ handleClick }
                onSubmit={ handleClick }
            >
                Entrar
            </button>
        </form>
    </div>);
}