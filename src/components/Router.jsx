// import React, {useContext} from 'react'
// import { Context } from './Context'; 
import { BrowserRouter , Routes, Route, Navigate} from 'react-router-dom'
import ContainerUser from '../pages/Container/ContainerUser'
import Error from '../pages/404/Error'
import NavBar from './NavBar'
import ChoiceUser from '../components/ChoiceUser'
// import { useContext } from 'react'
// import { Context } from './Context'; 

function Router(){
    // const env = process.env.REACT_APP_API_DEV === "true"
    // const { selectedUserId } = useContext(Context); 
    // component to clear localStorage before redirect to choiceUser
    function RedirectComponent() {
        localStorage.clear();
        return <Navigate to="/user/choiceUser" />;
      }

    return  <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<RedirectComponent/>} />
                    <Route path="/user/choiceUser" element={<ChoiceUser/>} />
                    <Route path="/user/:userId/*" element={<ContainerUser />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
}
export default Router