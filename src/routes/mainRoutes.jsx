import { Routes,Route, useLocation } from 'react-router-dom'
import Register  from '../pages/register/register'
import MYEditor from '../pages/editor/register'
import BarcodeScannaer from '../pages/barcode/barcode'

export default function MainRoutes() {
  return (
     <Routes> 
      <Route path='/' element={<BarcodeScannaer />}/>
        <Route path='/register ' element={<Register />}/>
        <Route path='/editor' element={<MYEditor/>}/>
        
      </Routes> 
  )
}
