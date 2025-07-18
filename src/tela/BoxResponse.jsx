import { DataResponse } from "./DataResponse";
import styles from "./Tela.module.css";

export function BoxResponse({
  display,
  cepApi,
  logradouro,
  bairro,
  cidade,
  uf,
}) {
  return (
    <div style={{ display: display }} className={styles.resposta}>
      <DataResponse nome="CEP" valor={cepApi} />
      <DataResponse nome="Logradouro" valor={logradouro} />
      <DataResponse nome="Bairro" valor={bairro} />
      <DataResponse nome="Cidade" valor={cidade} />
      <DataResponse nome="UF" valor={uf} />
    </div>
  );
}
