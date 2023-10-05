import BarCharts from "../../components/BarChart/BarChart"
import LineCharts from "../../components/LineChart/LineChart"
import RadarCharts from "../../components/RadarChart/RadarChart"
import RadialBarCharts from "../../components/RadialBarChart/RadialBarChart"
import Styles from '../../styles/Profil.module.css'


function Profil(){
  

    return (
        <div className={Styles.container}>
            <BarCharts/>
            <LineCharts/>
            <RadarCharts/>
            <RadialBarCharts/>
        </div>
    )
}
export default Profil