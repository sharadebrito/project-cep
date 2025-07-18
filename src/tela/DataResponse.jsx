import styles from "./Tela.module.css";

export function DataResponse({ nome, valor }) {
  return (
    <>
      <p className={styles.cep}>
        <b>{nome}</b>:{valor}
      </p>
    </>
  );
}
