import Styles from "../../styles/Error.module.css"
/**
 * Function to display Error page
 * @returns Component function Error
 */
function Error(props){
    const badRequest = props.message
 
    return <div className={Styles.container}>
            {badRequest?(
                <>
                <p>404</p>
                <p >oups! La page que vous demandez n'existe pas.</p>
                </>
            ): (
                <>
                <p>404</p>
                <p >oups! Page en cours de réalisation.</p> 
                </>
            )}
               
           </div>
}

export default Error