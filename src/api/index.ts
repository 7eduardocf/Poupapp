import axios from "axios";
import { IUsuario } from "../types";

const api = axios.create({
    baseURL:"http://localhost:5000"
})

export const obterUsuario = async(): Promise<IUsuario[]> =>{
    const {data} = await api.get<IUsuario[]>("/usuarios")
    return data
}

export const criarUsuario = async(usuario:Omit<IUsuario, "id"> ):Promise<IUsuario> => {
    const {data} = await api.post<IUsuario>("/usuarios",usuario)
    return data
}