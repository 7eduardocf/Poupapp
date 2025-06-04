export interface IUsuario{
    id: number
    nome: string
    renda: number
}

export interface ITransacoes{
    id: number
    nome: string
    valor: number
    tipo: "receita" | "despesa"
    categoria: string
    data: string
}