import React from 'react'

export const Registration = () => {
  return (

    <div className="Inscription">

    <form  className="register">
        <input type="text" placeholder='E-mail' />
        <input type="text" placeholder="Nom d'utilisateur" />
        <input type="password" placeholder='Mot de passe'/>
        <input type= "password" placeholder='Confirmer mot de passe' />


    </form>

    </div>
    
  )
}

export default Registration;