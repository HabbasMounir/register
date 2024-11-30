import { Routes,Route, useLocation } from 'react-router-dom'
import Registre from '../pages/registre/registre '
import MYEditor from '../pages/editor/registre '

export default function MainRoutes() {
  return (
     <Routes> 
      <Route path='/' element=''/>
        <Route path='/registre' element={<Registre/>}/>
        <Route path='/editor' element={<MYEditor/>}/>
        
      </Routes> 
  )
}
