
import { useEffect } from "react";


/**
 * Notification component to display a message with a specific style.
 * 
 * @param {Object} props - The properties object.
 * @param {string} props.message - The message to display.
 * @param {Function} props.setMessage - Function to set the message state.
 * @param {boolean} props.isError - Flag to determine if the message is an error.
 * 
 * @returns {JSX.Element|null} The Notification component or null if no message.
 */
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