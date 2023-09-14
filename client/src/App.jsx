import { Routes, Route } from 'react-router-dom'
import { ChatRoom } from './Pages/ChatRoom';
import { Home } from './Pages/Home';


export const App = () => {
 return(
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/chatroom' element={<ChatRoom/>}/>
  </Routes>
 )
};

export default App