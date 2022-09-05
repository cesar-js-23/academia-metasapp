import "./Encabezado.css";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { ReactComponent as Perfil } from "../../img/Perfil.svg";

const Encabezado = () => {
  return (
    <div className="encabezado">
      <div className="logo">
        <Logo />
        <a href="/">Metas App</a>
      </div>
      <nav>
        <a href="/perfil" className="vinculo">
          <Perfil />
        </a>
      </nav>
    </div>
  );
};

export default Encabezado;
