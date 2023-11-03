import logo from "./logo.svg";
import "./style/App.css";
import axios from "axios";
import { Registration } from "./components/Registration";
import { Login } from "./components/Login";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function App() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {users.map((user) => (
        <div key={user.id}>
          {user.email} - {user.username}
        </div>
      ))}

      <Registration />

      {user ? (
        <input
          type="button"
          value="Se Déconnecter"
          onClick={() => {
            dispatch({ type: "LOGOUT_USER" });
          }}
        />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
