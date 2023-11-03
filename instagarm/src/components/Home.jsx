
import axios from "axios";
import Registration from "./Registration";
import Login from "./Login";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";



export const Home = () => {
    const users = useSelector((state) => state.users);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
  return (


    <div>
        

{users.map((user) => (
        <div key={user.id}>
          {user.email} - {user.username}
        </div>
      ))}
      <Registration />
      {user ? (
        <>
        <input
          type="button"
          value="Se Déconnecter"
          onClick={() => {
            dispatch({ type: "LOGOUT_USER" });
          }}
        />
        <Link to={"/Feed"}>Accéder au Feed</Link>
        </>
        
      ) : (
        <Login />
      )}


    </div>
  )
}


export default Home;