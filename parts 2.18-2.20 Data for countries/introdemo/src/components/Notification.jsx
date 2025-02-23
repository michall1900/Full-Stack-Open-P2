import { useEffect } from "react";

/**
 * Notification component to display a message with a specific style.
 * The message will disappear after 5 seconds.
 *
 * @param {Object} props - The component props.
 * @param {string} props.message - The message to display.
 * @param {Function} props.setMessage - Function to clear the message.
 * @returns {JSX.Element|null} The Notification component or null if no message.
 */
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