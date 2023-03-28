import Cabecalho from "../../components/cabecalho";
import FavoritosProvider from "../../contextos/Favoritos";
import Container from "../../components/Container";
import {Outlet} from "react-router-dom";
import Rodape from "../../components/Rodape";

function PaginaBase() {
    return (
        <main>
            <Cabecalho/>
            <FavoritosProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritosProvider>
            <Rodape/>


        </main>

    )
}

export default PaginaBase