
import React, { useState, useEffect, useContext} from 'react'
import { Context } from '../components/Context'; 
import Styles from '../styles/BannerUser.module.css';
import { fetchUser } from "../services/api"


function Header() {
    const env = process.env.REACT_APP_API_DEV === "true"
    // récupération de l'id du context
    const {selectedUserId } = useContext(Context);
    const [datas, setDatas] = useState(null)
  
    // récupération des données de l'utilisteur
    useEffect(()=>{
      fetchUser(selectedUserId, setDatas)
    },[selectedUserId])
  
    console.log('api',datas)

    if (!datas) {
        return (
        <div className={Styles.para}>
            <p>Cet utilisateur n'existe pas</p>
        </div>
        )
    }

    return (
        <div className={Styles.para}>
            {!env ?(<p>Bonjour <span>{datas.userInfos.firstName}</span> </p>) : (<p>Information sur :  <span>{datas.userInfos.firstName} {datas.userInfos.lastName}</span> </p>)}
           
        </div>
    )
}

export default Header;
