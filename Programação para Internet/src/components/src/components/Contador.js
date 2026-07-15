import { useState } from "react";

function Contador() {
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <h3>Contador: {numero}</h3>
      <button onClick={() => setNumero(numero + 1)}>
        +1
      </button>
    </div>
  );
}

export default Contador;