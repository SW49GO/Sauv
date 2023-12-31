import {ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip,Legend,Bar} from 'recharts'
import Styles from '../../styles/BarChart.module.css'
import { fetchData } from "../../services/api";
import { useContext, useState,useEffect } from "react";
import { Context } from '../Context';
import CustomToolTip from './CustomToolTip'; 


function BarCharts(){
 // récupération de l'id du context
    const {selectedUserId } = useContext(Context);
    const [datas, setDatas] = useState(null)
  
    // récupération des données de l'utilisteur
    useEffect(()=>{
      fetchData(selectedUserId, setDatas, "activity")
    },[selectedUserId])
    // console.log('les datas',datas)

    return (
        <>
        <h3>Activité quotidienne</h3>
        <ResponsiveContainer  width="100%" height="100%" className={Styles.container}>
            <BarChart 
            data={datas}
            // taille largeur barres + écartement entre les barres
            barSize={7} barGap={8}
            // position du graphique dans mon container
            margin={{ top: 20, right: 10, left: 10, bottom: 20 }}>
                {/* Ligne grise en fond pointillé -> 3:tiret suivi de 3 espaces*/}
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                {/* Fonction pour extraire le jour du mois : tickFormatter={(day) => new Date(day).getDate()*/}
                {/* tick ->tiret */}
                <XAxis dataKey="day" stroke="#9B9EAC" axisLine={true}  tickLine={false} tickFormatter={(day) => new Date(day).getDate()} tickMargin={15}  padding={{ right: -30, left: -30 }}/>
                <YAxis type="number" stroke="#9B9EAC" axisLine={false} tickLine={false} tickCount='3' tickMargin={30} domain={['auto', 'dataMax + 20']}  orientation="right"/>
                {/* Encars fond gris qui s'affiche au clic de la souris + sa légende */}
                <Tooltip cursor={{ fill: 'rgba(196, 196, 196, 0.5)'}}  content={<CustomToolTip/>}/>
                {/* Position légende rattaché au Bar */}
                <Legend verticalAlign="top" align="right" iconType="circle" iconSize="8" height={50}/>
                {/* Barres du graph */}
                <Bar name="Poids (kg)" dataKey="kilogram" fill="#000000" radius={[5, 5, 0, 0]}/>
                <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#FF0000" radius={[5, 5, 0, 0]}/>
            </BarChart>
        </ResponsiveContainer>
        </>
    )
}
export default BarCharts