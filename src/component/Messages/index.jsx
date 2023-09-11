
import Message from "../Message/index.jsx";

const Messages = ({messages}) => {


    return (
        <>
            {
                messages.map((message, index) => {
                    return <Message message={message.message} key={index} />
                })
            }
        </>
    )
}

export default Messages