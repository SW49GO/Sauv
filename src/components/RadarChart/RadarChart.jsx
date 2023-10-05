import { RadarChart,Radar, ResponsiveContainer,PolarAngleAxis,PolarGrid,PolarRadiusAxis,Legend } from "recharts";
import { useState, useContext,useEffect } from "react";
import { Context } from '../Context';
import { fetchData } from "../../services/api";

function RadarCharts(){
     // récupération de l'id du context
     const {selectedUserId } = useContext(Context);
     const [datas, setDatas] = useState(null)
    //  console.log('datas:', datas)
   
     // récupération des données de l'utilisteur
     useEffect(()=>{
       fetchData(selectedUserId, setDatas, "performance")
     },[selectedUserId])
return(
    <>
    <ResponsiveContainer>
        <RadarChart outerRadius={90} width={730} height={250} data={datas}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend />
        </RadarChart>
    </ResponsiveContainer>
    </>
)
}
export default RadarCharts