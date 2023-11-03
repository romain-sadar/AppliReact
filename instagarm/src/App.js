import logo from "./logo.svg";
import "./style/App.css";
import axios from "axios";
import { Registration } from "./components/Registration";
import { useSelector } from "react-redux";

function App() {
  const users = useSelector((state) => state.users);

  return (
    <div className="App">
      {users.map((user) => (
        <div key={user.id}>
          {user.email} - {user.username}
        </div>
      ))}

      <Registration />
    </div>
  );
}

export default App;
