import React, {useState} from 'react'


const useToken = () => {
    console.log("tras la declaracion")
    const getToken =() =>{
        const tokenString = sessionStorage.getItem('token')
        const userToken = JSON.parse(tokenString)
        console.log("Token recuperado de la sesión pareseado: ", userToken)
        return userToken?.userId
    } 

    const [token, setToken] = useState(getToken())

    const saveToken = userToken => {
        console.log("tras el savetoken")
        sessionStorage.setItem('token', JSON.stringify(userToken))
        const tokenString = sessionStorage.getItem('token')
        console.log("Token guardado en la sesión: ", tokenString)
        setToken(userToken)
      }
      return {
        setToken: saveToken,
        token
      }
    }

export default useToken