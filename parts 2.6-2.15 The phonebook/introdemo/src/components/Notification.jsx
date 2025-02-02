import { useEffect } from "react";

const Notification = ({message, setMessage, isError})=>{


    const notificationStyle = {
        
        color: (isError)? "red": "green",
        background: "lightgrey",
        fontSize: "20px",
        borderStyle: "solid",
        borderRadius: "5px",
        padding: "10px",
        marginBottom: "10px"
          
    }


    useEffect(()=>{
        if(message){
            setMessage(message);
            setTimeout(()=> {setMessage(null)},5000);
        }

    }, [message])

    return(
        <>
            {message? 
            (<div style={notificationStyle}>
                {message}
            </div>): 
            null}
        </>
        
    )
}

export default Notification;