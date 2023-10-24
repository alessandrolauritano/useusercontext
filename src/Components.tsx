import {  useUserContext } from "./context/context";


export function Profile() {
    const user = useUserContext()
    return (
        <div> { user.name }</div>
    )
}

export function Sidebar () {
    const user = useUserContext();
    return(
        <>
        <div>User: { user.name } </div>
        <div>Sub status: { user.isSub }</div>
        </>
    )
}

