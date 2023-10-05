import { Routes, Route, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import Styles from '../../styles/Profil.module.css'
import BannerUser from "../../components/BannerUser"
import Profil from '../../pages/Profil/Profil'
import Activity from '../../components/Activity'
// import UserCompletion from '../../components/UserCompletion'
import AverageSessions from '../../components/AverageSessions'
import Performance from '../../components/Performance'
import { Context } from '../../components/Context';
import Error from '../404/Error' 

function ContainerUser(){
    console.log("Banniere")
    const env = process.env.REACT_APP_API_DEV === "true"
    const {userId} = useParams()
    console.log('userId:', userId)
    const {handleUserSelect } = useContext(Context);
    // récupération de l'id de l'utilisateur choisi dans choiceUser ou dans l'url
    const [user, setUser]=useState('')
    // récupération des datas de cet utilisateur

    console.log('userContainer:', user)
    // mise à jour de l'id du context une seule fois en mode PROD
    useEffect(()=>{
        if (!env && (!localStorage.getItem('userDefault') || localStorage.getItem('userDefault') === '')){
        localStorage.setItem('userDefault',userId)
        setUser(userId)
        }else if (!env){
        handleUserSelect(localStorage.getItem('userDefault'))
        }
    },[env,userId, handleUserSelect]) 

    // mise à jour du context si id de l'url change
    useEffect(()=>{
        if(env){
        handleUserSelect(userId)
        }
    },[userId, handleUserSelect, env])

    return (
        <div className={Styles.containerGlobal}>
            <BannerUser/>
            <div className={Styles.container}>
                <Routes >
                {env ? (
                <>
                <Route path="/" element={<Profil/>} />
                <Route path="/activity" element={<Activity />} />
                <Route path="/average-sessions" element={<AverageSessions />} />
                <Route path="/performance" element={<Performance />} />
                </>
                ) : (
                <>
                <Route path="/" element={<Profil />} />
                <Route path="/*" element={<Error message="bad request"/>}/>
                </>
                )}
                </Routes>
            </div>
        </div>
    )
}
export default ContainerUser