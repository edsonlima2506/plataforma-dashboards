import '../styles/principalData.css';
import man from '../images/icons/man.png';
import store from '../images/icons/store.png';
import subs from '../images/icons/subs.png';
import payment from '../images/icons/payment.png';

export default function PrincipalData() {
    return(
        <section className="principalData">
            <h1>Dados principais</h1>
            <section className="principaDataInfos">
                <span className="info">
                    <img src={ man } alt="man" className="principalIcon" />
                    <span className="infoTexts"> 
                        <h3>Usuários cadastrados</h3>
                        <h2>96</h2>
                    </span>
                </span>
                <span className="info">
                    <img src={ store } alt="man" className="principalIcon" />
                    <span className="infoTexts">
                        <h3>Lojas parceiras</h3>
                        <h2>15</h2>
                    </span>
                </span>
                <span className="info">
                    <img src={ subs } alt="man" className="principalIcon" />
                    <span className="infoTexts">
                        <h3>Assinaturas</h3>
                        <h2>4</h2>
                    </span>
                </span>
                <span className="info">
                    <img src={ payment } alt="man" className="principalIcon" />
                    <span className="infoTexts">
                        <h3>Lucro mensal bruto</h3>
                        <h2>R$40</h2>
                    </span>
                </span>
            </section>
        </section>
    );
}