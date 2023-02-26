
import {createContext,useState} from 'react'

export let AuthContext=createContext()
const AuthContextProvider = ({children}) => {
    let [isAuth,setisAuth]=useState(false)
    let [count,setcount]=useState(0)

    let UserLogin=()=>{

        setisAuth(true)
    }
    let UserLogout=()=>{
        setisAuth(false)
    }
  return (
    <AuthContext.Provider value={{isAuth,UserLogin,UserLogout,setcount,count}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
