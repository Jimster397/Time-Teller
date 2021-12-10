import {useState} from 'react';
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";


function LoginPage({setUser}){
    const [showLogin, setShowLogin] = useState(true)
    function handleClick(){
        setShowLogin(curretShowLogin => !curretShowLogin)
    }
    

    // const [showBuy, setShowBuy]=useState(false)
    // function handleClick(){
    //     setShowBuy((currentShowBuy)=> !currentShowBuy)
    // }
    
return(
<>
{showLogin ? <><LoginForm setUser = {setUser}/> <button onClick ={handleClick}>Sign-up!</button></>: <><SignUpForm setUser = {setUser}/><button onClick ={handleClick}>Login in!</button></>}

</>
)
}
export default LoginPage