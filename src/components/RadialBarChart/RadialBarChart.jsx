import { RadialBarChart, ResponsiveContainer,RadialBar, LabelList} from "recharts";
import { useState, useContext,useEffect } from "react";
import { Context } from '../Context';
import { fetchUser } from "../../services/api";

function RadialBarCharts(){
     // récupération de l'id du context
     const {selectedUserId } = useContext(Context);
    //  console.log('selectedUserId Radial:', selectedUserId)
     const [datas, setDatas] = useState(null)
    //  console.log('datas:', datas)

     // récupération des données de l'utilisteur
     useEffect(()=>{
       fetchUser(selectedUserId, setDatas)
     },[selectedUserId])

 
        // const score = (datas.score)*100
        // console.log('score:', score)
        // const newData = [{name:"Score", value: score}]
     

// console.log('DATA RADIAL:', datas.score)

const data = [
    {
      "name": "c'est ma légende",
      "uv": 31.47,
    //   "pv": 2400,
      "fill": "#FF0000"
    }
    // ,
    // {
    //   "name": "25-29",
    //   "uv": 26.69,
    //   "pv": 4567,
    //   "fill": "#83a6ed"
    // }
    // ,
    // {
    //   "name": "30-34",
    //   "uv": -15.69,
    //   "pv": 1398,
    //   "fill": "#8dd1e1"
    // },
    // {
    //   "name": "35-39",
    //   "uv": 8.22,
    //   "pv": 9800,
    //   "fill": "#82ca9d"
    // },
    // {
    //   "name": "40-49",
    //   "uv": -8.63,
    //   "pv": 3908,
    //   "fill": "#a4de6c"
    // },
    // {
    //   "name": "50+",
    //   "uv": -2.63,
    //   "pv": 4800,
    //   "fill": "#d0ed57"
    // },
    // {
    //   "name": "unknow",
    //   "uv": 6.67,
    //   "pv": 4800,
    //   "fill": "#ffc658"
    // }
  ]



    return(
        <>
        <h3 style={{margin:"5rem"}} >COUCOU</h3>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart 
                    // width={80} 
                    // height={500} 
                    innerRadius="60%" 
                    outerRadius="70%" 
                    data={data} 
                    startAngle={180}
                    // (12/100)*360 = 43.2°
                    endAngle={180-43.2}
                    >
                         
                    <RadialBar minAngle={0} cornerRadius={10} background clockWise={true} dataKey='uv'>
                        <LabelList dataKey="name" position="center" fill="#000"/>
                    </RadialBar>
                     </RadialBarChart>
   
                {/* <RadialBarChart 
                width={730} 
                height={250} 
                innerRadius="0%" 
                outerRadius="0%" 
                data={score} 
                startAngle={180} 
                endAngle={-100}
                >
                    <RadialBar minAngle={15} background={{fill : "red"}} clockWise={true} dataKey={score} cornerRadius={50}/>
                </RadialBarChart> */}
            </ResponsiveContainer>
        </>
       
    )
}

export default RadialBarCharts