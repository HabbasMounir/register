import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Cursor(props) {
    const [mousePos, setMousePos] = useState({});
    const [eventToggle,SetEventToggle]=useState(true)
    const [too,setoo]=useState(true)
    const [eventToggleClick,SetEventToggleClick]=useState(false)

    const [eles,setEles]= useState(props?.ele.split(","))
    var is_mobile = !!navigator.userAgent.match(/iphone|android|blackberry/ig) || false;
    const location = useLocation();
   

    
    useEffect(() => {
        // const handleMouseMove = (e) => {
        // setMousePos({ x: e.clientX +0
        //       , y: e.clientY +0});
        // };
        SetEventToggle(true)

      document.querySelectorAll("*").forEach(a=>{  a.style.cursor='none' })
       if(is_mobile) return
        const handleMouseMove = (e) => {
        setMousePos({ x: e.x +0
              , y: e.y +0});
        };
        const handleMouseClick = () => {
            SetEventToggleClick(true)
            setTimeout(()=>{
                SetEventToggleClick(false)
            },100)
        };

        eles.forEach(el=>{

            document.querySelectorAll(el).forEach(a=>{
                a.addEventListener('mousemove', () => {
                    SetEventToggle(false)


                        })
                a.addEventListener('mouseout', () => {
                    SetEventToggle(true)
                        })
                        })
        })


//  window.addEventListener('click', ()=>console.log(location));
 window.addEventListener('click', handleMouseClick);
window.addEventListener('mousemove', handleMouseMove);

        return () => {
          window.removeEventListener(
            'mousemove',
            handleMouseMove
          );
          window.removeEventListener('click', ()=>{});
        };
      }, [location]);

          // useEffect(() => {
          //   setTimeout(()=>{            SetEventToggle(true)
          //     eles.forEach(el=>{

          //       document.querySelectorAll(el).forEach(a=>{
          //           a.addEventListener('mousemove', () => {
          //               SetEventToggle(false)
    
    
          //                   })
          //           a.addEventListener('mouseout', () => {
          //               SetEventToggle(true)
          //                   })
          //                   })
          //   })
    
          //   },100)

          // }, [location]);

  return (
<>
    <div 
    style={{
      transition:eventToggle?'top 0s,left 0s,transform .1s ,width .1s,height .1s': 'top .2s,left .2s,transform.1s ',
      display:is_mobile?'none':'',
      userSelect:'none',
      position:"fixed",
      top:`${mousePos.y}px`,
      left:`${mousePos.x}px`,
      zIndex:'99989999999999999999999999',
      translate:'-50% -50%',
        pointerEvents:'none',
        borderRadius:'50%',
        height:eventToggle?'12px':"40px",
        width:eventToggle?'12px':"40px" ,
        transform:eventToggle?eventToggleClick?'scale(.4)':'scale(1)':eventToggleClick?"scale(.8)": "scale(1.4)",
        backdropFilter:eventToggle? 'invert(90%)':'invert(100%)'
    }}
    
  >
{/* {too?11:12} */}

  </div>
    <div 
    style={{
      transition:eventToggle?'top .1s,left .1s,transform .2s ,width .5s,height .5s': 'top .4s,left .4s,transform 1s ',
      display:is_mobile?'none':'',
      userSelect:'none',
      position:"fixed",
      top:`${mousePos.y}px`,
      left:`${mousePos.x}px`,
      zIndex:'99989999999999999999999999',
      translate:'-50% -50%',
        pointerEvents:'none',
        borderRadius:'50%',
        height:eventToggle?'60px':"60px",
        width:eventToggle?'60px':"60px" ,
        transform:eventToggle?eventToggleClick?'scale(.4)':'scale(1)':eventToggleClick?"scale(.8)": "scale(0)",
        backdropFilter:eventToggle? 'invert(0%)':'invert(0%)',
        // background:'#fff01',
        border:eventToggle? 'invert(0%)':'invert(0%)',
         mixBlendMode: "difference"

    }}
    
  >

  </div>
  <div style={{
    //   transition:'all .1s',
      transition: eventToggle?"all 0.1s,border 1s ":"all .4s,border 1s ",
    //   translate:` ${mousePos.x/document.body.offsetWidth*100}% ${mousePos.y/document.body.offsetHeight*100}%`,
    display:is_mobile?'none':'',

    top:`${mousePos.y}px`,
      left:`${mousePos.x}px`,
      translate:'-50% -50%',

      userSelect:'none',
      position:'fixed',
      
      zIndex:'99989',
        pointerEvents:'none',
        borderRadius:'50%',
        // border:eventToggle?eventToggleClick? 'solid 2px var(--mainColor)': 'solid 0px var(--mainColor)':eventToggleClick? 'solid 0px var(--mainColor)': 'solid 0px var(--mainColor)',
        height:eventToggleClick ?'40px':'0px',
        width: eventToggleClick ?'40px':'0px',
        backdropFilter:eventToggle? 'brightness(80%)':'brightness(100%)',

        // transform:eventToggle?eventToggleClick?'scale(1.1)':'scale(1)':eventToggleClick?"scale(.8)": "scale(1.7)",

    }}>
</div>

</>
    )
}
