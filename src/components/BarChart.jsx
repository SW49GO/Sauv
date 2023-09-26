import {ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip,Legend,Bar, Label} from 'recharts'
import Styles from '../styles/BarChart.module.css'
const data =[
    
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210
      }
    ]

function BarCharts(){
    return (
        <ResponsiveContainer  width="100%" height="100%" className={Styles.container}>
            <BarChart 
            data={data}
            barSize={6} barGap={6}
            margin={{ top: 20, right: 100, left: 50, bottom: 5 }}>
                {/* Ligne grise en fond */}
                <CartesianGrid strokeDasharray="6" vertical={false} />
                <XAxis dataKey="name">
                    <Label value="Pages of my website" offset={0} position="insideBottom" />
                </XAxis>
                <YAxis />
                <Tooltip cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}/>
                <Legend verticalAlign="top" align="right" iconType="circle" iconSize="10" height={80}/>
                <Bar dataKey="pv" fill="#000000" radius={[3, 3, 0, 0]}/>
                <Bar dataKey="uv" fill="#FF0000" radius={[3, 3, 0, 0]}/>
            </BarChart>
        </ResponsiveContainer>
    )
}
export default BarCharts