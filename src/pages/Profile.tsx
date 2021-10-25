import React from 'react';
import {connect} from "react-redux";
import {StoreType} from "../state/store";
import {useHistory} from "react-router-dom";

type Props = {
  login: string
}

const Profile: React.FC<Props> = (props: Props) => {
  const history = useHistory()

  if (!props.login) {
    history.push("/")
  }

  return (
    <div className="Profile">
      <h1>{props.login}</h1>
    </div>
  );
}

const mapStateToProps = (state: StoreType) => ({
  login: state.login
})

export default connect(mapStateToProps, {})(Profile);
