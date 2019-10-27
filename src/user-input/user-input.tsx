import React, { Props } from 'react';
import './user-input.css';

type UserInputProps = {
  username: string;
  usernameHandler: Function;
};

const UserInput: React.FC<UserInputProps> = (props: UserInputProps) => {
  return (
    <input
      value={props.username}
      onChange={event => {
        props.usernameHandler(event);
      }}
    ></input>
  );
};

export default UserInput;
