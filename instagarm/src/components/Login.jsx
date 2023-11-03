import React from 'react'

export const Login = () => {
  return (
    <form action="" className="login">
        <input type="text" placeholder="Nom d'utilisateur" value={username} onChange={e =>setUsername(e.target.value)} />
        <input type="password" placeholder='Mot de passe' value={password} onChange={e =>setPassword(e.target.value)}/>
        <input type="button" value="Se connecter" onClick={register} />
    </form>
  )
}
