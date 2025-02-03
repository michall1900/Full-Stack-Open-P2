import { useEffect } from "react";

const Notification = ({message, setMessage}) =>{

    const notificationsStyle = {
        color : "red",
        fontSize : "20px",
        background: "lightGrey"
    }

    useEffect(()=>{
        if(message)
            setTimeout(()=>setMessage(null), 5000);
    }, [message])

    return(
        <>
            {message? (
                <div style={notificationsStyle}>
                    {message}
                </div>
            ): null}
        </>
    )
}

export default Notification;