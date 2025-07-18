import styles from "./Tela.module.css";

export function Forms({ onChange, onClick }) {
  return (
    <div className={styles.form}>
      <input type="text" placeholder="00000-000" onChange={onChange} />
      <button className={styles.buttonCEP} onClick={onClick}>
        Pesquisar
      </button>
    </div>
  );
}
