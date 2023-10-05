import { RadialBarChart, ResponsiveContainer,RadialBar,Legend,Tooltip } from "recharts";
import { useState, useContext,useEffect } from "react";
import { Context } from '../Context';
import { fetchUser } from "../../services/api";

function RadialBarCharts(){
     // récupération de l'id du context
     const {selectedUserId } = useContext(Context);
     console.log('selectedUserId Radial:', selectedUserId)
     const [datas, setDatas] = useState(null)

     // récupération des données de l'utilisteur
     useEffect(()=>{
       fetchUser(selectedUserId, setDatas)
     },[selectedUserId])



console.log('DATA RADIAL:', datas)
    return(
        <>
            <ResponsiveContainer>
                <RadialBarChart 
                width={730} 
                height={250} 
                innerRadius="10%" 
                outerRadius="80%" 
                data={datas} 
                startAngle={180} 
                endAngle={0}
                >
                    <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
                    <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                    <Tooltip />
                </RadialBarChart>
            </ResponsiveContainer>
        </>
       
    )
}

export default RadialBarCharts