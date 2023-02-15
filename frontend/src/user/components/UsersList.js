import React from 'react';

import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';
import './UsersList.css';

const UsersList = props => {

  return (
    <ul className="users-list">
      {props.items.map(price => (
        <UserItem
          key={price.id}
          name={price.name}
          count={price.count}
          price={price.price}
        />
      ))}
    </ul>
  );
};

export default UsersList;
