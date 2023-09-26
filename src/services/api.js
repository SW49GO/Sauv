import {USER_MAIN_DATA} from "../datasMock/datasMock"
import {USER_ACTIVITY} from "../datasMock/datasMock"
import {USER_AVERAGE_SESSIONS} from "../datasMock/datasMock"
import {USER_PERFORMANCE} from "../datasMock/datasMock"


export async function fetchData(userId, setDatas, endpoint) {
    console.log('userId fetch:', userId)
    if(process.env.REACT_APP_API_DEV === "true"){
        if(endpoint === "user"){
            const userMainData = USER_MAIN_DATA.find((user)=>{
            if(user.id === parseInt(userId)){
                console.log('user:', user)
                return user
            }
            return false
            })
        setDatas(userMainData)
        }
       
        if(endpoint === "activity"){
            const userActivity = USER_ACTIVITY.filter((user)=>{
            if(user.userId === parseInt(userId)){
              console.log(user)
                return user
            }
            return false
            })
        setDatas(userActivity)
        }
        
        if(endpoint === "average-sessions"){
            const userSessions = USER_AVERAGE_SESSIONS.filter((user)=>{
            if(user.userId === parseInt(userId)){
                return user
            }
            return false
            })
        setDatas(userSessions)
        }

        if(endpoint === "performance"){
          const userPerformance = USER_PERFORMANCE.filter((user)=>{
          if(user.userId === parseInt(userId)){
              return user
          }
          return false
          })
      setDatas(userPerformance)
      }
  }
    // if(endpoint === "user"){
    //   try{
    //       const response = await fetch (`http://localhost:3000/user/${userId}`)
    //       const results = await response.json()
    //       console.log('results:', results)
    //       if(endpoint === "user"){
    //         setDatas(results.data)
    //       }
    //     }
    //     catch(err){
    //       console.log(err)
    //     }
    // }
    try{
      let response;
      let results;
      if(endpoint==="user"){
        response = await fetch (`http://localhost:3000/user/${userId}`)
        results = await response.json()
        setDatas(results.data)
        }else{
          response = await fetch (`http://localhost:3000/user/${userId}/${endpoint}`)
          results = await response.json()
        }

    if(endpoint === "activity"){
      console.log(results.data.sessions)
      setDatas(results.data.sessions)
    }
    else if(endpoint === "performance"){
      setDatas(results.data.data)
    } 
    else if(endpoint === "average-sessions"){
      setDatas(results.data.sessions)
    }
    }
    catch(err){
      console.log(err)
    }
}

export async function getAllUser(){
  return USER_MAIN_DATA
}
