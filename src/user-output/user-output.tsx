import React, { Props } from 'react';
import './user-output.css';

type UserOutputProps = {
  username: string;
};

const UserOutput: React.FC<UserOutputProps> = (props: UserOutputProps) => {
  return <p>{props.username}</p>;
};

export default UserOutput;
