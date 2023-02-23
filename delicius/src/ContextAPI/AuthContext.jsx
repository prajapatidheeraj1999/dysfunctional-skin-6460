
import {createContext,useState} from 'react'

export let AuthContext=createContext()
const AuthContextProvider = ({children}) => {
    let [isAuth,setisAuth]=useState(false)

    let UserLogin=()=>{

        setisAuth(true)
    }
    let UserLogout=()=>{
        setisAuth(false)
    }
  return (
    <AuthContext.Provider value={{isAuth,UserLogin,UserLogout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
