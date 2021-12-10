import UserList from "./UserList"
import WatchCard from "./WatchCard"

function WatchPage({setUser, otherUser, watches, user}){
    const allUsers = otherUser.map(appuser=> <UserList setUser={setUser} user={user} appuser = {appuser} key = {appuser.id} />)
    const renderWatch = watches.map(watch=> <WatchCard watch = {watch} key = {watch.id}/>)
    return(
       <>
        
       <section> {allUsers}</section>
       <section>{renderWatch}</section>
       </>
    )
}
export default WatchPage