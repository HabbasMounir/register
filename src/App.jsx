import { useEffect, useState  } from 'react'
// import ElectricDoor from './assets/sounds/Electric Door 13.mp3'
import './App.css'
import Cursor from './cursor';
import { Routes,Route, useLocation } from 'react-router-dom'
import MainRoutes from './routes/mainRoutes';


function App() {
  const [dataState, setDataState] = useState("waite")
  const location = useLocation();

  
 useEffect(()=>{
    setDataState('done')
    let alls=document.querySelector('*')
    let allsStyle=getComputedStyle(alls)
    let  SecColor1=allsStyle.getPropertyValue('--mainColor')

    let logo=`
   this app by mounir habbas
    `
  // console.warn(logo)
  console.log(`asd ${logo} %c${logo} `, ' font-size:12px;      background: radial-gradient(  left at 90% 50%,  red 0%,   green 100%  ) ; background-repeat:  no-repeat; background-size:100%;' ,'color: red ;  text-shadow: 1px 1px 0px #ffff00;  ');
 },[])
  
 useEffect(()=>{
  scrollTo(0, 0)

    let logo=`
   this app by mounir habbas
    `
  console.warn(logo)
 },[location])
  
 useEffect(()=>{
    setDataState('done')
    let alls=document.querySelector('*')
    let allsStyle=getComputedStyle(alls)
    let  SecColor1=allsStyle.getPropertyValue('--mainColor')

    let logo=`
   this app by mounir habbas
    `
  // console.warn(logo)
  console.log(`asd ${logo} %c${logo} `, ' font-size:12px;      background: radial-gradient(  left at 90% 50%,  red 0%,   green 100%  ) ; background-repeat:  no-repeat; background-size:100%;' ,'color: red ;  text-shadow: 1px 1px 0px #ffff00;  ');
 },[])




  return (
    <>
      {/* <LoadingPage  dataState={dataState}/> */}
      {/* <Cursor ele="a,button,hover"/> */}
      <MainRoutes> </MainRoutes> 
      {/* <Footer></Footer> */}
      
    </>
  )
}

export default App
