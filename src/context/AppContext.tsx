import { createContext } from "react"
import { IUsuario } from "../types"

interface AppContextType{
    usuario: IUsuario | null
}

const AppContext = createContext<AppContextType | undefined>(undefined)

const AppProvider = ({children}:{children: React.ReactNode}) => {
  return (
    <AppContext.Provider value={{}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider
