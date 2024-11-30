import { Routes,Route, useLocation } from 'react-router-dom'
import Register  from '../pages/register/Register'
import MYEditor from '../pages/editor/register '

export default function MainRoutes() {
  return (
     <Routes> 
      <Route path='/' element={<Register />}/>
        <Route path='/register ' element={<Register />}/>
        <Route path='/editor' element={<MYEditor/>}/>
        
      </Routes> 
  )
}
