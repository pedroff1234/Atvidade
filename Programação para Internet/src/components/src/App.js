import Saudacao from "./components/Saudacao";
import Perfil from "./components/Perfil";
import Contador from "./components/Contador";
import Interruptor from "./components/Interruptor";

function App() {
  return (
    <div>
      <Saudacao />

      <Perfil nome="Maria" />
      <Perfil nome="João" />

      <Contador />

      <Interruptor />
    </div>
  );
}

export default App;