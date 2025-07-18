import { useState } from "react";
import styles from './Tela.module.css'
import { Forms } from "./Forms";
import { Cabecalho } from "./Cabecalho";
import { getCep } from "./getCep";
import { Resposta } from "./Resposta";

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
    <div className={styles.container}>
      <Cabecalho />
      <Forms onChange={handleCep} onClick={pesquisar} />
      <Resposta
        display={display}
        logradouro={logradouro}
        bairro={bairro}
        cidade={cidade}
        uf={uf}
        cepApi={cepApi}
      />
    </div>
  );
}
