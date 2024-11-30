import Style from "./page.module.css"
import { useEffect, useState } from "react"
import { useParams,useLocation   } from "react-router-dom"
import {Helmet} from "react-helmet";
import OneDarkPro from './theme/onedarkpro.json';




export default function Registre (props) {
  const [caseStudy, setCaseStudy] = useState();
  const [lang, SetLang] = useState('ar');
  const [step,SetStep] =useState(0)


  const [fullName, SetFullName] = useState();
  const [ID, SetID] = useState();
  const [phoneNum, SetPhoneNum] = useState();
  const [city,SetCity]=useState()
  const [email,SetEmail]=useState()

  
  const [register, SetRegister] = useState({
      name:'',
      lastname:'',
      id:'',
      phoneNum:'',
      city:'',
      email:'',
      col:''
  });

  function regiHundler(e){
    SetRegister(({
      ...register,
      [e.target.id]: e.target.value // But override this one
    }))
  }
  const [cardSlected,SetCardSlected]=useState([''])





  const location = useLocation();

  const  steps=
[
    {
        ar:'المعلومات الشخصية',
        eng:'Personal Information'
      },
      {
        ar:'1المعلومات الشخصية',
        eng:'Personal Information'
      },
      {
        ar:'2المعلومات الشخصية',
        eng:'Personal Information'
      },
]
  // const histors = useHistory();
const text={
  perinfo:{
    ar:'المعلومات الشخصية',
    eng:'Personal Information'
  },
  fullName:{
    ar:'الإسم الكامل',
    eng:'full name'
  },
  ID:{
    ar:'ID',
    eng:'ID'
  },
  IST:{
    ar:'كلية ',
    eng:'Institute',
    ists:{
      ar:[
        'اختر كليتك',
        'كلية التكنولوجيا',
        'كلية العلوم',
        'كلية العلوم الطبيعية والحياة',
        'كليــة العلوم الإقتصادية و التجارية و علوم التسيير',
        'كلــيـة الطـــب',
        'معــهد البــصريــات و ميــكانيــك الدقــة',
        'معــهد الهنــدسة المعـمارية و علــوم الارض',
        'معـهـد علـوم وتقنـيات المـواد',
        ],
      eng:[
        'Select a college',
        'Faculty of Technology',
        'Faculty of Science',
        'Faculty of Natural and Life Sciences',
        'Faculty of Economics, Commerce and Management Sciences',
        'Faculty of Medicine',
        'Institute of Optics and Precision Mechanics',
        'Institute of Architecture and Earth Sciences',
        'Institute of Materials Sciences and Technologies'
      ]
    }
  },

  email:{
    ar:'ايمايل',
    eng:'email'
  },
  phone:{
    ar:'رقم الهاتف',
    eng:'phone'
  },
  city:{
    ar:'المدينة',
    eng:'ciry'
  },
}
const tecInfo={
  familiar :{
      ar:"ما هي الأشياء التي تعرفها في علوم الكمبيوتر؟",
      eng: "  What are you familiar with in computer science  "
  }
}

const  id = useParams().id;
  useEffect(() => {
    // const fetchcaseStudy = async () => {
    //   try {
    //     const caseStudyData = await getcaseStudybyId(id);
    //     setCaseStudy(caseStudyData);
    //   } catch (error) {console.log(error)   }
    // };
 
    // handleStep(0)
    // SetCardSlected([''])
    // handleStep("+")
    
  }, []);

  function handleStep(move){
if (move==0) {
    SetStep(move)
} 
if (move=='+'&&step<steps.length-1) {
    SetStep(step+1)
} 
if (move=='+'&&step==steps.length-1) {
    SetStep(0)
} 
if (move=='-'&& step>0) {
    SetStep(step-1)
} 

}
  function handleActive(e){
    e.target.classList.toggle(Style.active)

    // if (cardSlected.includes(e.target.getAttribute("place"))) 
   let newCard=cardSlected
    SetCardSlected([...cardSlected,e.target.getAttribute("place")    ])

    console.log(newCard,newCard.includes(e.target.getAttribute("place")) ,e.target.getAttribute("place"))
    
//    cardSlected.forEach(a=>{
// // a==e.target.getAttribute("place")?newCard=[...newCard,a]:newCard=[...newCard,a]

// })
      // SetCardSlected(newCard)
      // console.log(newCard ) 

   
  //  console.log(cardSlected ) 
    }
   
  

  
  return (
    <div  className={Style.page}>
      {/* <Cursor ele="a,button"/> */}
      <Helmet>
                <meta charSet="utf-8" />
                {/* <title>{caseStudy?.title}</title>
                <link rel="canonical" href={window.location.host} />
                <meta name="description" content={caseStudy?.desc} /> */}
      </Helmet>
{/* <img src={dsk} className={Style.dsk}  alt="" /> */}
{/* <Phone   src={caseStudy?.phoneview} remove={700}/> */}

{/* <img src={phonecase} className={Style.phone} alt="" /> */}
<div className={Style.perinfo} dir={lang=='ar'?'rtl':"ltr"}>
    <h3 >  
      {steps[step][lang]}      <div className={Style.hr} />  
    </h3>

    <div  className={Style.prevNext}>
       <button tabIndex='8' onClick={()=>handleStep('-')}  className={`${Style.prev }  ${step==0?Style.hidden:''} `}> 
        <svg
       xmlns="http://www.w3.org/2000/svg"
       xmlSpace="preserve"
       width={20}
       height={20}
       viewBox="0 0 55.752 55.752"
       {...props}
       >
       {
       lang=='ar'?
       <path d="M43.006 23.916a5.36 5.36 0 0 0-.912-.727L20.485 1.581a5.4 5.4 0 0 0-7.637 7.638l18.611 18.609-18.705 18.707a5.398 5.398 0 1 0 7.634 7.635l21.706-21.703a5.35 5.35 0 0 0 .912-.727 5.373 5.373 0 0 0 1.574-3.912 5.363 5.363 0 0 0-1.574-3.912z" />
       :
       <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
       
       } 
       
       
       </svg>
         
         
          </button>


      
        
    <button tabIndex='8' onClick={()=>handleStep('+')} className={`${Style.next }  ${step==steps.length-1?Style.hidden:''} `}>
      
  
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={20}
    height={20}
    viewBox="0 0 55.753 55.753"

    {...props}
  >
       {
lang=='ar'?
<path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
:
    <path d="M43.006 23.916a5.36 5.36 0 0 0-.912-.727L20.485 1.581a5.4 5.4 0 0 0-7.637 7.638l18.611 18.609-18.705 18.707a5.398 5.398 0 1 0 7.634 7.635l21.706-21.703a5.35 5.35 0 0 0 .912-.727 5.373 5.373 0 0 0 1.574-3.912 5.363 5.363 0 0 0-1.574-3.912z" />
   } 
  </svg>


      
      
      
        </button>

    </div>

  </div>
<div dir={lang=='ar'?'rtl':"ltr"} className={Style.registre} >
 

{step==0&&<FirstPage hundler={regiHundler} data={register} lang={lang}/> }

{step==1&&<>
<span> {tecInfo.familiar[lang]} :*</span>
  
  <div className={Style.selectImge} dir="rtl">
  <span tabIndex='1' place='1'  style={{  border:" 2px #0fa solid;"}} onClick={handleActive} className={`${Style.optionImge} `}>
  web dev
  </span>
  <span tabIndex='2' place='2' style={{  border:" 2px #0fa solid;"}} onClick={handleActive} className={Style.optionImge}>
  web dev
  </span>
  <span  tabIndex='3'  place='3' style={{  border:" 2px #0fa solid;"}} onClick={handleActive} className={Style.optionImge}>
  web dev
  </span>
  <span  tabIndex='4'  place='4' style={{  border:" 2px #0fa solid;"}} onClick={handleActive} className={Style.optionImge}>
  web dev
  </span>
  <span  tabIndex='5'place='5' style={{  border:" 2px #0fa solid;"}} onClick={handleActive} className={Style.optionImge}>
  web dev
  </span>
  <span tabIndex='6' place='6'style={{  border:" 2px #0fa solid;"}} onClick={handleActive} className={Style.optionImge}>
  web dev
  </span>
  


  </div>
  </>
     }
     {step==2&&<SecPage hundler={regiHundler} data={register} lang={lang}/> }

      </div>






      <div   className={Style.sett}>
      <div    className={Style.lang}>
      <span  className={lang=='ar'?Style.active:''} onClick={()=>SetLang('ar')}>arabic</span>
      <span  className={lang=='eng'?Style.active:''} onClick={()=>SetLang('eng')}>eng</span>
      </div>
 
<div  dir={lang=='ar'?'rtl':"ltr"} className={Style.carousel}>
  
<span >
perinfssso</span>
<hr/>
<span >
perinfo
</span>
<hr/>
<span >
perinfo</span>
  </div>


      </div>
    
    </div>
  )
}

// eslint-disable-next-line react/prop-types
export  function FirstPage ({data,hundler,lang}) {
  const [phoneNum, SetPhoneNum] = useState();
  const [city,SetCity]=useState()
  const [email,SetEmail]=useState()


  const text={
    name:{
      ar:'الإسم ',
      eng:' name'
    },
    lastname:{
      ar:'اللقب ',
      eng:'last name'
    },
    id:{
      ar:'ID',
      eng:'ID'
    },
    IST:{
      ar:'كلية ',
      eng:'Institute',
      ists:{
        ar:[
          'اختر كليتك',
          'كلية التكنولوجيا',
          'كلية العلوم',
          'كلية العلوم الطبيعية والحياة',
          'كليــة العلوم الإقتصادية و التجارية و علوم التسيير',
          'كلــيـة الطـــب',
          'معــهد البــصريــات و ميــكانيــك الدقــة',
          'معــهد الهنــدسة المعـمارية و علــوم الارض',
          'معـهـد علـوم وتقنـيات المـواد',
          ],
        eng:[
          'Select a college',
          'Faculty of Technology',
          'Faculty of Science',
          'Faculty of Natural and Life Sciences',
          'Faculty of Economics, Commerce and Management Sciences',
          'Faculty of Medicine',
          'Institute of Optics and Precision Mechanics',
          'Institute of Architecture and Earth Sciences',
          'Institute of Materials Sciences and Technologies'
        ]
      }
    },
  
    email:{
      ar:'ايمايل',
      eng:'email'
    },
    phone:{
      ar:'رقم الهاتف',
      eng:'phone'
    },
    city:{
      ar:'المدينة',
      eng:'ciry'
    },
  }
return(
<>
    <label>
      <span> {text.name[lang]}  :*</span>
      <input value={data.name} id="name" onChange={hundler} className="bg-red" tabIndex='1' type="text"  />
    </label> 
    {/* name:'',
      lastname:'',
      ID:'',
      phoneNum:'',
      city:'',
      email:'',
      col:'' */}
    <label>
      <span> {text.lastname[lang]}  :*</span>
      <input value={data.lastname} id="lastname" onChange={hundler} className="bg-red" tabIndex='1' type="text"  />
    </label> 
    <label>
      <span> {text.id[lang]} :*</span>
      <input tabIndex='2' type="text"  value={data.id} id="id" onChange={hundler}/>
    </label>
    <label>
      <span> {text.city[lang]} :*</span>
      <input tabIndex='3' type="text" value={city} onChange={(e) => SetCity(e.target.value)} />
    </label>
    <label>
      <span> {text.phone[lang]} :*</span>
      <input tabIndex='4' type="text" value={phoneNum} onChange={(e) => SetPhoneNum(e.target.value)} />
    </label>
    <label>
      <span> {text.email[lang]} :*</span>
      <input tabIndex='5' type="text" value={email} onChange={(e) => SetEmail(e.target.value)} />
    </label>
    <label>
      <span> {text.IST[lang]} :*</span>
      <select tabIndex='6'>
      {text.IST['ists'][lang].map((a,i)=>i==0?<option key={i} value={''}> {a}</option>:<option key={i} value={a}> {a}</option>   )}
      </select>
    </label>
    </>
)
}





import Editor, { useMonaco } from "@monaco-editor/react";



export  function SecPage ({data,hundler,lang}) {
 
  const monaco = useMonaco();

  const [language,setLanguage]=useState('javascript')
  const [line,setLine]=useState(0)
  
  const [editorVal,setEditorVal]=useState('')
  const [toggle,setToggle]=useState(false)

  const [messages,setMessages]=useState([
    '// give us ur name',
    '// give us ur last name',
    '// give us ur email',
    '// give us ur phone',
    '// give us ur willaya ',
  
  ])
  const [isch,setIsch]=useState(true)
  let timeOut
  useEffect(()=>{
    setIsch(false)
  setTimeout(()=>setIsch(true),200)
  }    ,[language])

  function handleEditorChange(value, event) {
    event.changes[0].text.includes(event.eol)&&value.split('\r\n')[value.split('\r\n').length-2].length>0&&setLine(line+1)
    value.length==0&&setLine(0)
    value.length==0&&setToggle(!toggle)
    // console.log(value.length==0)
    

    let myEd=value.split('\r\n')
    let beforEd=value.split('\r\n')[value.split('\r\n').length-3]
    let lstEd=value.split('\r\n')[value.split('\r\n').length-2]

if (event.changes[0].text.includes(event.eol)) {
  beforEd==messages[0]?myEd[value.split('\r\n').length-2]=`const name='${lstEd}'`:''
  beforEd==messages[1]?myEd[value.split('\r\n').length-2]=`const lastName='${lstEd}'`:''
  beforEd==messages[2]?myEd[value.split('\r\n').length-2]=`let email='${lstEd}'`:''
  beforEd==messages[3]?myEd[value.split('\r\n').length-2]=`let phone='${lstEd}'`:''
  beforEd==messages[4]?myEd[value.split('\r\n').length-2]=`let willaya='${lstEd}'`:''
  setEditorVal(myEd.join('\r\n'))
}else{
  setEditorVal(value)
}
  
    // setLine(event.changes[0].range.endLineNumber)

    // setEditorVal(value)
    // if (monaco) {
    //   console.log('here is the monaco instance:', monaco);
    // }
  }
  const [lastMessage,setLastmessage]=useState(`type ={
send:"to send form",
edit:"to edit form",
del:"to delet form",
check:"to check form",
    }
    `)
  useEffect(()=>{
    // console.log(messages.length,line)
    // if (editorVal=='') setEditorVal('')
      
    
    let newArray =messages.length>line? [...messages[line],'\r\n'].join('').split(''):lastMessage.split('')
    let neweditorVal=editorVal
    let myvald=''
    for (let i = 0; i < newArray.length; i++) {
      // setEditorVal('')
    setTimeout(()=>{
      myvald+=newArray[i]
      setEditorVal([...neweditorVal,myvald].join(''))
    },100*(i))
      // setTimeout(()=>console.log(myvald),1000*i)
      
    }
  },[line,toggle])
return(
  <div className={Style.Peditor}  dir='ltr'>
    {/* {editorVal} */}
    {/* {line} */}
    {/* <input style={{color:'red'}} onChange={(e)=>setLanguage(e.target.value)} value={language} type="text" /> */}
 {isch&&
  <Editor 
  loading={<h1>asdsa</h1>}
  line={2}
  value={editorVal}
  className={Style.editor}
  defaultLanguage={language}
  defaultValue={editorVal}
  onChange={handleEditorChange}
  theme="OneDarkPro" 
  options={{
    // scrollBeyondLastLine:false,
    fontSize:"16",
    acceptSuggestionOnCommitCharacte:false,
    // fontFamily: ['Segoe UI', "Tahoma", "Geneva", "Verdana", "sans-serif"]
}}
/>
 } 
 
  </div>
 
)
}