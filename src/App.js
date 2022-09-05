import "./App.css";
import Encabezado from "./componentes/compartidos/Encabezado";
import Pie from "./componentes/compartidos/Pie";
import Principal from "./componentes/compartidos/Principal";

function App() {
  return (
    <div className="App">
      <Encabezado />
      <Principal />
      <Pie />
    </div>
  );
}

export default App;
