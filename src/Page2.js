import { Link } from "react-router-dom";
import "./Page2.css";
import React, { useState } from "react";
import Page3 from "./Page2comp2";
import { FaTimes } from "react-icons/fa";
import { IoTimer } from "react-icons/io5";
import { IoCloseCircleOutline} from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
export let datab = [
  {
    AdressLine1: "1395 Park Avenue",
    AddressLIne2: "",
    phone: "+1442918940",
    email: "mailto:hawk90@gmail.com",
    city: "sacramento",
    state: "California",
    zipcode: "95814",
    country: "United states",
  },
];

function Input_Form({
  isVisible,
  setIsVisible,
  setData,
  data,
  obj,
  index,
  setObj,
  setIndex,
  count,
  setCount,
  
}) {
  console.log(obj);
  // const [time,setTime]=useState({fromh:"1",fromm:"20",toh:"5",tom:"55"});
  const [times ,settimes] =useState();
  const[bolin,setbolin]=useState(true);
  // let bolin=true;
  const handleclick = ()=>{
      setbolin(!bolin);
      // bolin=!bolin;
      console.log(bolin);
   }
  //  function handletime (e){
  //   setTime({ ...time, [e.target.name]: e.target.value });
    
  // };
  // const [hourarray,sethourarray]=useState(["0","1","2","3","4","5","6","7","8","9","10","11","12"]);
  // const [minutearray,setminutearray]=useState(["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17"
  //   ,"18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41",
  //   "42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60"]);
  const [address, setaddress] = useState(obj);
  const [country1, setcountry] = useState([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man","Israel",
    "Italy","Jamaica","Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ]);

  const {
    AdressLine1,
    AddressLIne2,
    phone,
    email,
    city,
    state,
    zipcode,
    country,
  } = address;
  const handlechange = (e) => {
    setaddress({ ...address, [e.target.name]: e.target.value });
  };
  const handleClick = (i) => {
    setIsVisible(!isVisible);
  };

  function edit(index) {
    // console.log("datab array is")
    // console.log(datab);
    console.log("data at index" + datab[index]);
    // console.log(data[index]);
    // let {AdressLine1,AddressLIne2,phone,email,city,state,zipcode,country}  =data[index];
    // setaddress({AdressLine1,AddressLIne2,phone,email,city,state,zipcode,country});
  }

  function update() {
    let hold = [...data];
    console.log(index);
    hold.splice(index, 1, {
      AdressLine1,
      AddressLIne2,
      phone,
      email,
      city,
      state,
      zipcode,
      country,
    });
    setData(hold);
    setObj({
      AdressLine1: "",
      AddressLIne2: "",
      phone: "",
      email: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      time: [],
    });
    setIndex(0);
    setIsVisible(!isVisible);
  }
  function Cancel() {
    setIsVisible(!isVisible);
    setObj({
      AdressLine1: "",
      AddressLIne2: "",
      phone: "",
      email: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      time: [],
    });
  }
  function Page5() {
    const[array,setarray]=useState([]);
   
    const [hourarray,sethourarray]=useState(["0","1","2","3","4","5","6","7","8","9","10","11","12"]);
    const [minutearray,setminutearray]=useState(["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17"
      ,"18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41",
      "42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60"]);
      const [time1,setTime1]=useState({fromh:"",fromm:"",toh:"",tom:""});
      function handletime (e){
        setTime1({ ...time1, [e.target.name]: e.target.value });
      
       
      };
      //   const [hourarray,sethourarray]=useState([]);
  //   for(let i=0;i<=12;i++)
  //   {
  //     hourarray.push(i)
  //   }
  //  const [minutearray,setminutearray]=useState([]);
  //    for(let i=0;i<=60;i++)
  //    {
  //      minutearray.push(i)
  //    }
  console.log(time1);

   return (
  <div>
  
     <div  id="leftside" >
        <label style={{font:'20px Lato',width:"46px",height: "24px", marginTop:"33px"}}>From</label>  <label  id ="to" style={{font:'20px Lato',width:"21px",height: "24px", left: "599px"}}>To</label> <br/>
                  <select   name="fromh" onChange={handletime}  style={{width:"100px",height: "56px",borderRadius: '8px' ,marginTop:"13px" }}>  
                    
                     {
                           hourarray.map((info) => { 
                            
                         
                                   return(

                                     <option   name="fromh" value={info}>{info}</option>
                                   )
                                   }
                             )
                       }
                     </select>{' '}
                      <select  name="fromm"  onChange={handletime}  style={{width:"100px",height: "56px",borderRadius: '8px' ,marginLeft:"16px"}}> 
                     {
                             minutearray.map((info) => { 
                                   return(
                                     <option  name="from" value={info}>{info}</option>
                                   )
                                   }
                             )
                       }
                     </select>{" "}
                     
                       <select name="toh"  onChange={handletime} id="mar" style={{width:"100px",height: "56px" ,borderRadius: '8px' ,marginLeft:"35px"}}>  
                         {
                               hourarray.map((info) => { 
                                       return(
                                         <option  name="to" value={info}>{info}</option>
                                       )
                                       }
                                 )
                           }
                         </select>{' '}
                         
                     <select name="tom"  onChange={handletime}  style={{width:"100px",height: "56px",borderRadius: '8px',marginLeft:"16px"}}>
                     {
                             minutearray.map((info) => { 
                                   return(
                                     <option  name="to" value={info}>{info}</option>
                                   )
                                   }
                             )
                       }
                     </select>{' '}
  
                      <br/><br/>   
                      <div>


 <div>

 <label style={{font:'20px Lato',width:"46px",height: "24px", marginTop:"33px"}}>From</label>  <label  id ="to" style={{font:'20px Lato',width:"21px",height: "24px", left: "599px"}}>To</label> <br/>
                  <select   name="fromh" onChange={handletime}  style={{width:"100px",height: "56px",borderRadius: '8px' ,marginTop:"13px" }}>  
                     {
                           hourarray.map((info) => { 
                                   return(
                                     <option  value={info}>{info}</option>
                                   )
                                   }
                             )
                       }
                     </select>{' '}
                     <select  name="fromm"  onChange={handletime}  style={{width:"100px",height: "56px",borderRadius: '8px' ,marginLeft:"16px"}}> 
                     {
                             minutearray.map((info) => { 
                                   return(
                                     <option  name="fromm"  value={info}>{info}</option>
                                   )
                                   }
                             )
                       }
                     </select>{" "}
                     
                     <select name="toh" onChange={handletime} id="mar" style={{width:"100px",height: "56px" ,borderRadius: '8px' ,marginLeft:"35px"}}>  
                         {
                               hourarray.map((info) => { 
                                       return(
                                         <option  name="toh" value={info}>{info}</option>
                                       )
                                       }
                                 )
                           }
                         </select>{' '}
                         
                         <select name="tom"  onChange={handletime}  style={{width:"100px",height: "56px",borderRadius: '8px',marginLeft:"16px"}}>
                     {
                             minutearray.map((info) => { 
                                   return(
                                     <option name="tom" value={info}>{info}</option>
                                   )
                                   }
                             )
                       }
                     </select>{' '}
                     <button   id="addtime" ><IoCloseCircleOutline color="#0078D4" style={{height:"27px",width:"27px"}} /></button> <br/><br/>   
                   
                     
             </div> 
                      
     </div>
             </div> 
                      
     </div>

     
   )
  }
//   function Page4() {
//     // const [time1,settime1]=useState({fromh:"",fromm:"",toh:"",tom:""});
//     // const selects =(e)=>
//     // {
//     //   console.log(e.target.value)
//     //   console.log(e.target.id)
//     //   settime({...time,[e.target.id]:e.target.value});
//     // }
//     const [time2,setTime2]=useState({fromh:"",fromm:"",toh:"",tom:""});
//       function handletime (e){
//         setTime2({ ...time2, [e.target.name]: e.target.value });
//         // console.log(time1);
//         console.log(time2);
//       };
//     // function handletime (e){
//     //   settime1({ ...time1, [e.target.name]: e.target.value });
//     //   console.log("in hsndletik");
//     //   console.log(time1)
//     // };
//     const [hourarray,sethourarray]=useState([]);
//     for(let i=0;i<=12;i++)
//     {
//       hourarray.push(i)
//     }
//    const [minutearray,setminutearray]=useState([]);
//      for(let i=0;i<=60;i++)
//      {
//        minutearray.push(i)
//      }
//      console.log(time2);
//    return (
//  <div>
//  <div>
//  <label style={{font:'20px Lato',width:"46px",height: "24px", marginTop:"33px"}}>From</label>  <label  id ="to" style={{font:'20px Lato',width:"21px",height: "24px", left: "599px"}}>To</label> <br/>
//                   <select   name="fromh" onChange={handletime}  style={{width:"100px",height: "56px",borderRadius: '8px' ,marginTop:"13px" }}>  
//                      {
//                            hourarray.map((info) => { 
//                                    return(
//                                      <option  value={info}>{info}</option>
//                                    )
//                                    }
//                              )
//                        }
//                      </select>{' '}
//                      <select  name="fromm"  onChange={handletime}  style={{width:"100px",height: "56px",borderRadius: '8px' ,marginLeft:"16px"}}> 
//                      {
//                              minutearray.map((info) => { 
//                                    return(
//                                      <option  name="fromm"  value={info}>{info}</option>
//                                    )
//                                    }
//                              )
//                        }
//                      </select>{" "}
                     
//                      <select name="toh" onChange={handletime} id="mar" style={{width:"100px",height: "56px" ,borderRadius: '8px' ,marginLeft:"35px"}}>  
//                          {
//                                hourarray.map((info) => { 
//                                        return(
//                                          <option  name="toh" value={info}>{info}</option>
//                                        )
//                                        }
//                                  )
//                            }
//                          </select>{' '}
                         
//                          <select name="tom"  onChange={handletime}  style={{width:"100px",height: "56px",borderRadius: '8px',marginLeft:"16px"}}>
//                      {
//                              minutearray.map((info) => { 
//                                    return(
//                                      <option name="tom" value={info}>{info}</option>
//                                    )
//                                    }
//                              )
//                        }
//                      </select>{' '}
//                      <button   id="addtime" ><IoCloseCircleOutline color="#0078D4" style={{height:"27px",width:"27px"}} /></button> <br/>  
                   
                     
//              </div> 
                      
//      </div>
//    )
//  }

  function saveData() {
 
  //   console.log("in save")
  //  console.log(time)
  settimes("g");
  console.log(times);
    setData([
      ...data,
      {
        AdressLine1,
        AddressLIne2,
        phone,
        email,
        city,
        state,
        zipcode,
        country,
    
      },
    ]);

    // datab = [...datab, ...data];
    datab.push({
      AdressLine1,
      AddressLIne2,
      phone,
      email,
      city,
      state,
      zipcode,
      country,
    });

    console.log(datab);
    console.log("arrayis");
    console.log(data.length);
    console.log(data);
    setIsVisible(isVisible);
  }
  return (
    <div>
      <div className="rectangle">
        <span className="address">Address</span>
        <div className="outer">
          <div className="gridcontainer">
            <>
              <p className="leftside">
                <label className="required">Address Line 1</label>
                <input
                  type="text"
                  className="inputfields"
                  name="AdressLine1"
                  onChange={handlechange}
                  value={address.AdressLine1}
                />
                <>
                  <label className="required">Phone</label>{" "}
                  <input
                    type="text"
                    className="inputfields"
                    name="phone"
                    onChange={handlechange}
                    value={address.phone}
                  />
                </>
                <>
                  <label className="required">City</label>{" "}
                  <input
                    type="text"
                    className="inputfields"
                    name="city"
                    onChange={handlechange}
                    value={address.city}
                  />
                </>
                <>
                  <label className="required">Zip Code</label>{" "}
                  <input
                    type="text"
                    className="inputfields"
                    name="zipcode"
                    onChange={handlechange}
                    value={address.zipcode}
                  />
                </>
              </p>
            </>
            <div>
              <p className="leftside">
                <label>Address Line 2</label>
                <input
                  type="text"
                  className="inputfields"
                  name="AddressLIne2"
                  onChange={handlechange}
                  value={address.AddressLIne2}
                />
                <>
                  <label>Email</label>{" "}
                  <input
                    type="text"
                    className="inputfields"
                    name="email"
                    onChange={handlechange}
                    value={address.email}
                  />
                </>
                <>
                  <label className="required">State / Provience</label>{" "}
                  <input
                    type="text"
                    className="inputfields"
                    name="state"
                    onChange={handlechange}
                    value={address.state}
                  />
                </>
                <>
                  <label className="required">Country</label>{" "}
                  <select
                    // id="country"
                    name="country"
                    className="inputfields"
                    onChange={handlechange}
                  >
                    <option>select Country</option>
                    {country1.map((val) => {
                      return (
                        <option name="country" value={val}>
                          {val}
                        </option>
                      );
                    })}
                  </select>
                </>
                <div></div>
              </p>
            </div>
          </div>
          <div><div id ="display"><p id="Tlbl" style={{font:'24px Lato'}} >Timings</p><Page5/>{bolin ?
    <div>
     <br/>
   <button id="addtime" onClick={handleclick}><IoAddCircleOutline Add-Timing color="#0078D4" /><u>Add Timings</u></button>
    
   </div>
    : <span>
    <Page5/> <br/><button id="addtime" onClick={handleclick}><IoAddCircleOutline Add-Timing color="#0078D4" /><u>Add Timings</u></button>
    </span>
    
  }
  </div> 
    </div>
         
        </div>
        <div>
          {isVisible ? (
            <Link to="/">
              <button onClick={saveData} className="button">
                Save
              </button>
            </Link>
          ) : (
            <Link to="/">
            <button className="button1" onClick={Cancel}>
              Cancel
            </button>
            <button onClick={update} className="button">
              Update
            </button>{" "}
            
          </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Input_Form;
