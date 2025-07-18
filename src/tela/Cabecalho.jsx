import styles from './Tela.module.css'

export function Cabecalho() {
  return (
    <div>
      <h1>Consulta de CEP/Endereço</h1>
      <div className={styles.textoesquerda}>
        <p className={styles.p}>Buscar por CEP</p>
        <p>Digite o CEP:</p>
      </div>
    </div>
  );
}
