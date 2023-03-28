import styles from './Favoritos.module.css'
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import videos from "../../json/db.json";
import Card from "../../components/Card";
import {useFavoritoContext} from "../../contextos/Favoritos";

function Favoritos() {
    const {favorito} = useFavoritoContext();
    return (
        <>
            <Banner imagem="favoritos"/>
            <Titulo>
                <h1>Meus Favoritos!</h1>
            </Titulo>
            <section className={styles.conteiner}>
                {favorito.map((fav) => {
                    return <Card{...fav} key={fav.id}/>
                })}
            </section>
        </>
    )
}

export default Favoritos