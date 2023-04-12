import { Link } from "react-router-dom";
import "./Page2.css";
import React, { useState } from "react";
import Page3 from "./Page2comp2";

export let datab = [
  {
    AdressLine1: "1395 Park Avenue",
    AddressLIne2: "",
    phone: "+1442918940",
    email: "hawk90@gmail.com",
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
  const [address, setaddress] = useState(obj);
const [country1,setcountry] = useState(["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]);
  
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

  function update(){
    let hold =  [...data];
    console.log(index);
     hold.splice(index,1,{
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
function Cancel(){
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
  function saveData() {
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
    //setIsVisible(!isVisible);
  }
  return (
    <div>
      <div className="rectangle">
        <span className="address">Address</span>
        <div className="outer">
          <div className="gridcontainer">
            <div>
              <p className="leftside">
                <label className="required">Address Line 1</label>
                <input
                  type="text"
                  className="inputfields"
                  name="AdressLine1"
                  onChange={handlechange}
                  value={address.AdressLine1}
                />
                <div>
                  <label className="required">Phone</label>{" "}
                  <input
                    type="text"
                    className="inputfields"
                    name="phone"
                    onChange={handlechange}
                    value={address.phone}
                  />
                </div>
                <div>
                <label className="required">City</label>{" "}
                  <input
                    type="text"
                    className="inputfields"
                    name="city"
                    onChange={handlechange}
                    value={address.city}
                  />
                </div>
                <div>
                <label className="required">Zip Code</label>{" "}
                  <input
                    type="text"
                    className="inputfields"
                    name="zipcode"
                    onChange={handlechange}
                    value={address.zipcode}
                  />
                </div>
              </p>
            </div>
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
                <div>
                  <label>Email</label>{" "}
                  <input
                    type="text"
                    className="inputfields"
                    name="email"
                    onChange={handlechange}
                    value={address.email}
                  />
                </div>
                <div>
                <label className="required">State / Provience</label>{" "}
                  <input
                    type="text"
                    className="inputfields"
                    name="state"
                    onChange={handlechange}
                    value={address.state}
                  />
                </div>
                <div>
                <label className="required">Country</label>{" "}
                  <select
                    // id="country"
                    name="country"
                    className="inputfields"
                   
                    onChange={handlechange}
                  >
                      <option>select Country</option>
                     {
                           country1.map((info) => { 
                                 return(
                                   <option   name="country" value={info}>{info}</option>
                                 )
                                 }
                           )
                     }
                  
                    
                  
                  </select>
                </div>
              </p>
            </div>
          </div>
          <Page3 />
        </div>
        <div>{isVisible? <Link to="/"><button onClick={saveData} className="button">
            Save
          </button></Link> : <Link to="/"><button onClick={update} className="button">
          update
          </button> <button className="button" onClick={Cancel}>Cancel</button></Link>}
        
          
        </div>

      </div>

    </div>
  );
}

export default Input_Form;