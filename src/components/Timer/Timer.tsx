import Botao from "../Button/Button";
import Clock from "./Clock/Clock";

export function Timer() {
  return (
    <div>
      <p>Escolha um card e inicie o cronômetro</p>
      <div>
        <Clock />
      </div>
      <Botao>Começar!</Botao>
    </div>
  );
}
