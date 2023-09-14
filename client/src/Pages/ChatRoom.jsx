import { useState, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { BsSend } from 'react-icons/bs'

const socketUrl = 'ws://localhost:8080'

export const ChatRoom = () => {
  const [messageHistory, setMessageHistory] = useState([]);


  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  useEffect(()=>{
    const keyDownHandler = event => {

      if (event.key === 'Enter') {
        handleClickSendMessage();
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  },[])

  const handleClickSendMessage = () => {
    const message = document.getElementById('message').value
    sendMessage(message)
    document.getElementById('message').value = ''
  }

  // const connectionStatus = {
  //   [ReadyState.CONNECTING]: 'Connecting',
  //   [ReadyState.OPEN]: 'Open',
  //   [ReadyState.CLOSING]: 'Closing',
  //   [ReadyState.CLOSED]: 'Closed',
  //   [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  // }[readyState];

  return (
    <div className='main_chat_div'>
      <div className='messages_div'>
        <ul>
          {messageHistory.map((message,index) => {
            return(
              <li key={index}>{message ? message.data : null}</li>
            )
          })}
        </ul>
      </div>
      <div className='send_message_div'>
        <input id='message' type="text" />
        <button
          onClick={handleClickSendMessage}
          disabled={readyState !== ReadyState.OPEN}
          type="submit"
        >
          <BsSend style={{color:'black'}}/>
        </button>
      </div>
    </div>
  );
}
