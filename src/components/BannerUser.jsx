
import React, { useState, useEffect, useContext} from 'react'
import { Context } from '../components/Context'; 
import Styles from '../styles/BannerUser.module.css';
import { fetchData } from "../services/api"



function Header() {
    // récupération de l'id du context
    const {selectedUserId } = useContext(Context);
    const [datas, setDatas] = useState(null)
  
    useEffect(()=>{
      fetchData(selectedUserId, setDatas, "user")
    },[selectedUserId])
  
    console.log('api',datas)

    if (!datas) {
        return null;
    }

    return (
        <div className={Styles.para}>
            <p>Bonjour <span>{datas.userInfos.firstName}</span> </p>
        </div>
    )
}

export default Header;
