import { RadarChart,Radar, ResponsiveContainer,PolarAngleAxis,PolarGrid} from "recharts";
import { useState, useContext,useEffect } from "react";
import { Context } from '../Context';
import { fetchData } from "../../services/api";

function RadarCharts(){
     // récupération de l'id du context
     const {selectedUserId } = useContext(Context);
     const [datas, setDatas] = useState(null)
    // creation d'un objet pour reformater les données à partir de (kind et data)
    let newDatas={}
    if(datas!==null){
        console.log('RADARCHART:',datas)
        const kindDatas = datas.kind

        newDatas = {
            data: datas.data.map((dataItem) => {
                return {
                    kind: kindDatas[dataItem.kind],
                    value: dataItem.value
                };
            })
        };
        //inverse l'ordre des objets de kind dans data
        newDatas.data.reverse();
    }
console.log("newdata",newDatas)

    
    
   
     // récupération des données de l'utilisteur
     useEffect(()=>{
       fetchData(selectedUserId, setDatas, "performance")
     },[selectedUserId])

    // console.log(dtas)
    //  const data = [
    //     {
    //       "subject": "Math",
    //       "A": 120,
    //       "B": 110,
    //       "fullMark": 150
    //     },
    //     {
    //       "subject": "Chinese",
    //       "A": 98,
    //       "B": 130,
    //       "fullMark": 150
    //     },
    //     {
    //       "subject": "English",
    //       "A": 86,
    //       "B": 130,
    //       "fullMark": 150
    //     },
    //     {
    //       "subject": "Geography",
    //       "A": 99,
    //       "B": 100,
    //       "fullMark": 150
    //     },
    //     {
    //       "subject": "Physics",
    //       "A": 85,
    //       "B": 90,
    //       "fullMark": 150
    //     },
    //     {
    //       "subject": "History",
    //       "A": 65,
    //       "B": 85,
    //       "fullMark": 150
    //     }
    //   ]


return(
    <>
    <ResponsiveContainer>
    <RadarChart outerRadius={90} width={730} height={250} data={newDatas.data}>
{/* sans ligne vertical vers le centre */}
  <PolarGrid radialLines={false}/>
  {/*  tickFormatter={(value) => value.charAt(0).toUpperCase() + value.slice(1)} mettre la 1ere lettre en majuscule de value */}
  <PolarAngleAxis dataKey="kind" axisLine={false} tickLine={false} dy={4} tick = {{fontSize: 12, fontWeight: 500}} tickFormatter={(value) => value.charAt(0).toUpperCase() + value.slice(1)}/>
  {/* <PolarRadiusAxis angle={30} domain={[0, 150]} /> */}
  <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7}  domain={[0, 'dataMax']}/>
  {/* <Legend /> */}
</RadarChart>
    </ResponsiveContainer>
    </>
)
}
export default RadarCharts