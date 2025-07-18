import axios from "axios";

export async function getCep(numeroCep) {
    const response = await axios.get(
      `https://viacep.com.br/ws/${numeroCep}/json`
    );
    return response.data;
  }