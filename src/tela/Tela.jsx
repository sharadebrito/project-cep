import { useState } from "react";
import styles from "./Tela.module.css";
import axios from "axios";

async function getCep(numeroCep) {
  const response = await axios.get(
    `https://viacep.com.br/ws/${numeroCep}/json`
  );
  return response.data;
}

export function Tela() {
  const [display, setDisplay] = useState("none");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [cepApi, setCepApi] = useState("");

  function handleCep(e) {
    setCep(e.target.value);
  }

  async function pesquisar() {
    const endereco = await getCep(cep);
    setLogradouro(endereco.logradouro);
    setBairro(endereco.bairro);
    setCidade(endereco.localidade);
    setUf(endereco.uf);
    setCepApi(endereco.cep);

    setDisplay("flex");
  }

  return (
    <div>
      <div className={styles.container}>
        <h1>Consulta de CEP/Endereço</h1>
        <div className={styles.textoesquerda}>
          <p className={styles.p}>Buscar por CEP</p>
          <p>Digite o CEP:</p>
        </div>
        <div className={styles.form}>
          <input type="text" placeholder="00000-000" onChange={handleCep} />
          <button className={styles.buttonCEP} onClick={pesquisar}>
            Pesquisar
          </button>
        </div>
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
      </div>
    </div>
  );
}
