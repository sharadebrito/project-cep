import styles from "./Tela.module.css";

export function Resposta({ display, cepApi, logradouro, bairro, cidade, uf }) {
  return (
    <div style={{ display: display }} className={styles.resposta}>
      <p className={styles.cep}>
        <b>CEP:</b> {cepApi}
      </p>
      <p className={styles.cep}>
        <b>Logradouro:</b> {logradouro}
      </p>
      <p className={styles.cep}>
        <b>Bairro:</b> {bairro}
      </p>
      <p className={styles.cep}>
        <b>Cidade:</b> {cidade}
      </p>
      <p className={styles.cep}>
        <b>UF:</b> {uf}
      </p>
    </div>
  );
}
