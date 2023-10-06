import {USER_MAIN_DATA} from "../datasMock/datasMock"
// import {USER_ACTIVITY} from "../datasMock/datasMock"
// import {USER_AVERAGE_SESSIONS} from "../datasMock/datasMock"
// import {USER_PERFORMANCE} from "../datasMock/datasMock"

const kindMapping = {
  'cardio': 'cardiovasculaire',
  'energy': 'énergie',
  'endurance': 'endurance',
  'strength': 'force',
  'speed': 'vitesse',
  'intensity': 'intensité'
};


export async function fetchData(userId, setDatas, endpoint) {
    console.log('userId fetch:', userId)
    if(process.env.REACT_APP_API_DEV === "true"){

        // if(endpoint === "activity"){
        //     const userActivity = USER_ACTIVITY.filter((user)=>{
        //     if(user.userId === parseInt(userId)){
        //       console.log(user)
        //         return user
        //     }
        //     return false
        //     })
        // setDatas(userActivity)
        // }
        
        // if(endpoint === "average-sessions"){
        //     const userSessions = USER_AVERAGE_SESSIONS.filter((user)=>{
        //     if(user.userId === parseInt(userId)){
        //         return user
        //     }
        //     return false
        //     })
        // setDatas(userSessions)
        // }

        // if(endpoint === "performance"){
        //   const userPerformance = USER_PERFORMANCE.filter((user)=>{
        //   if(user.userId === parseInt(userId)){
        //       return user
        //   }
        //   return false
        //   })
        //   const translatedData = userPerformance.map((dataItem) => {
        //   const copyDatas = { ...dataItem };
        //     for (const key in copyDatas.kind) {
        //       if (kindMapping.hasOwnProperty(copyDatas.kind[key])) {
        //         copyDatas.kind[key] = kindMapping[copyDatas.kind[key]];
        //       }
        //     }
        //     return copyDatas;
        //   });
    
        // // state avec les données changés
        // setDatas(translatedData);
          
        // // setDatas(userPerformance)
        // }
  }

    try{

      const response = await fetch (`http://localhost:3000/user/${userId}/${endpoint}`)
      const results = await response.json()

      if(endpoint === "activity"){
        // console.log('ACTIVITYFETCH',results.data.sessions)
        setDatas(results.data.sessions)
      }
      else if(endpoint === "performance"){
        console.log('PERFFETCH',results)
        // change objet en array pour le mapper
        const dataArray = Object.values(results);
        console.log('dataArray:', dataArray)
        const translatedData = dataArray.map((dataItem) => {
          const copyDatas = { ...dataItem };
          for (const key in copyDatas.kind) {
            if (kindMapping.hasOwnProperty(copyDatas.kind[key])) {
              copyDatas.kind[key] = kindMapping[copyDatas.kind[key]];
            }
          }
          return copyDatas;
        });
        console.log('TranslateDatas:', translatedData)
      // state avec les données changés
      setDatas(translatedData[0]);
        // setDatas(results.data)
      } 
      else if(endpoint === "average-sessions"){
        // console.log('AVERAGEFETCH',results.data.sessions)
        setDatas(results.data.sessions)
      }
      }
      catch(err){
        console.log(err)
    }
}

export async function fetchUser(userId,setDatas) {
  const userMainData = USER_MAIN_DATA.find((user)=>{
    if(user.id === parseInt(userId)){
      if(user!== null){
        // console.log('USERDANSFETCH',user)
        if(user.todayScore){
          user["score"] = user.todayScore
            delete user["todayScore"];
          }
     }
        return user
    }
    return false
    })
  setDatas(userMainData)
  
  try{
    const response = await fetch (`http://localhost:3000/user/${userId}`)
    const results = await response.json()
    if(results!== null){
      // console.log('USERDANSFETCH',results.data)
      if(results.data.todayScore){
        results.data["score"] = results.data.todayScore
          delete results.data["todayScore"];
        }
   }
    // console.log('results:', results)
    setDatas(results.data)
  }
  catch(err){
    console.log(err)
  }

}

export async function getAllUser(){
  return USER_MAIN_DATA
}
