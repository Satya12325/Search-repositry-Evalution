import Inputs from '../Components/LoginForm'
import styles from './Styles.module.css'


function Login(){
    return (
       <div className={styles.loginForm}>
           <Inputs/>
       </div>
    )
}
export default Login;