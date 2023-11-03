import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const Login = () => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const login = () => {

        

        const payload = users.find(user => user.username === username && user.password === password)

        if (payload) {
            dispatch({
                type: 'LOGIN_USER',
                payload: payload
            })
            alert ("Connexion réussie")
            }else {
                alert ("Mauvais logins")
            }
    
        }

  return (
    <div className="Inscription">
    <span className="title"> Connexion</span>
    <form action="" className="register">
        <input type="text" placeholder="Nom d'utilisateur" value={username} onChange={e =>setUsername(e.target.value)} />
        <input type="password" placeholder='Mot de passe' value={password} onChange={e =>setPassword(e.target.value)}/>
        <input type="button" value="Se connecter" onClick={login} />
    </form>
    </div>
  )

}

export default Login;
