import React, {useState, MouseEvent} from 'react';
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "../state/domains/login/loginAction";

type Props = {
  login: (login: string) => void
}

const App: React.FC<Props> = (props: Props) => {
  const history = useHistory()
  const [login, updateLogin] = useState("")
  const [password, updatePassword] = useState("")

  const enter = (event: MouseEvent) => {
    event.preventDefault();

    if (login === "developer21" && password === "123456") {
      history.push("/profile")
      props.login(login)
    }
  }

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Login" value={login} onChange={e => updateLogin(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={e => updatePassword(e.target.value)}/>

        <button onClick={enter}>
          Enter
        </button>
      </form>
    </div>
  );
}

export default connect(null, {login})(App);
