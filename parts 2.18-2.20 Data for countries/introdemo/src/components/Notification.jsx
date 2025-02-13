import { useEffect } from "react";

const Notification = ({message, setMessage}) =>{

    const notificationsStyle = {
        color : "red",
        fontSize : "35px",
        background: "lightgrey",
        border: "thin dashed black",
        textAlign: "center",
        marginBottom: "3vh"
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