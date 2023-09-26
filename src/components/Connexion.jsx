import { useState } from "react";
import { getAllUser} from "../services/api"
import { Navigate } from "react-router-dom";
const users = await getAllUser()


function Connexion(){
    const [ userId , setUserId ] = useState(null); 
    console.log('selectedUserId:', setUserId)

  if (userId) {
    localStorage.clear()
    localStorage.setItem('user',userId)
    return <Navigate to={`/user/${userId}`} />;
  }
    return (
        <div>
          <h2>Liste des utilisateurs :</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id} onClick={() => setUserId(user.id)}>
                Utilisateur : {user.userInfos.firstName}
              </li>
            ))}
          </ul>
        </div>
      );
}
export default Connexion