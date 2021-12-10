import {useState} from "react";
import EditForm from "./EditForm";

function UserList({appuser, user, setUser}){
    console.log(user.first_name)
    console.log(appuser.username)
    const [cat, setCat]= useState(false)
    function handleClick(){
        setCat(true)
    }
    // function handleDelete(){
    //     fetch(`/profile/${user.id}`, {
    //         method: "DELETE",
    //       }).then((resp) => {
    //         if (resp.ok) {
    //           setUser(null);
    //         }
    //       });
    // }
return (
    <>
    <h3 >{appuser.username}</h3>
    {user.username === appuser.username ? <div><button onClick={handleClick}>Edit</button></div> : null}
    {cat ? <EditForm setUser={setUser} user={user} setCat= {setCat}/>: null}
    </>
)
}

export default UserList
{/* <button onClick={handleDelete}>Delete Profile</button> */}