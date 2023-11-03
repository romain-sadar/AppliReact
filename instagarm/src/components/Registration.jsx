import React , {useState }from 'react'
import { useDispatch } from 'react-redux';

export const Registration = () => {

   
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const dispatch = useDispatch();

    const register = () => {
        dispatch({
            type: 'REGISTER_USER',
            payload: {
                id : (new Date()).getTime(),
                email, username, password
            }
        })
    }

  return (

    <div className="Inscription">
    <span className="title"> Inscription</span>
    <form  className="register">
        <input type="text" placeholder='E-mail' value={email} onChange={e =>setEmail(e.target.value)}/>
        <input type="text" placeholder="Nom d'utilisateur" value={username} onChange={e =>setUsername(e.target.value)} />
        <input type="password" placeholder='Mot de passe' value={password} onChange={e =>setPassword(e.target.value)}/>
        <input type= "password" placeholder='Confirmer mot de passe' value={confirmPassword} onChange={e =>setConfirmPassword(e.target.value)}/>
        <input type="button" value="S'incrire" onClick={register} />


    </form>

    </div>
    
  )
}

export default Registration;