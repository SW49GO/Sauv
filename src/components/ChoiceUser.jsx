import React, { useContext, useState,useEffect } from 'react';
import {getAllUser} from '../services/api';
import Styles from '../styles/ChoiceUser.module.css';
import { Context } from './Context'; 
import { Navigate } from 'react-router-dom';

function ChoiceUser() {
  localStorage.clear()
  const { selectedUserId , handleUserSelect } = useContext(Context); 
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const usersData = await getAllUser();
        setUsers(usersData);
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      }
    }

    fetchUsers();
  }, []);

 
  if (selectedUserId) {
    return <Navigate to={`/user/${selectedUserId}`} />;
  }
  return (
    <div className={Styles.container}>
      <h2>Liste des utilisateurs :</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserSelect(user.id)}>
            Utilisateur : {user.userInfos.firstName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChoiceUser;
