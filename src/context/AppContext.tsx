import { createContext, useEffect, useState } from "react"
import { IUsuario } from "../types"
import { obterUsuario } from "../api"

interface AppContextType {
    usuario: IUsuario | null
    criarUsuario: (usuario:Omit<IUsuario,"id">) => Promise<void>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

const AppProvider = ({ children }: { children: React.ReactNode }) => {

    const [usuario, setUsuario] = useState<IUsuario | null>(null)

    const carregaDadosUsuario = async()=>{
        try {
            const usuarios = await obterUsuario()
            if(usuarios.length > 0){
                setUsuario(usuarios[0])
            }
        } catch (error) {
            console.log(error);
        }
    } 

    useEffect(()=>{
        carregaDadosUsuario()
    },[])

    const criarUsuario = async(usuario:Omit<IUsuario, "id">)=>{
        try {
            const novoUsuario = await criarUsuario(usuario)
            setUsuario(novoUsuario)
        } catch (error) {
            console.log(error);
               
        }
    }

    return (
        <AppContext.Provider value={{usuario, criarUsuario}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider
