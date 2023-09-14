import { useNavigate } from "react-router-dom"


export const Home = () => {
  const navigate = useNavigate()

  const handleEnter = () => {
    navigate('/chatroom')
  }

  return (
    <div>
      <button onClick={handleEnter}>ENTER CHAT</button>
    </div>
  )
}
