import React from 'react';
import {Accordion,Card,CustomToggle} from "react-bootstrap";
import {useState,useEffect}from "react";
import axios from "axios";

function Statedata() {
  const[Statedata, setStatedata]=useState()
  // var keys

  useEffect(() => {
      axios.get('https://data.covid19india.org/state_district_wise.json').then((response)=>{
        console.log(response.data);
        setStatedata(response.data);
      })
    },[])

    // let keys,navigate;

    // return (
    //   <>
    //     {
          
    //       (keys) ? (
    //         keys.map(item => {
    //           return (
    //             <div className="card" key={item.id} 
    //             onClick={()=>navigate(`/${item.id}`)}>
    //               <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
    //               <div className="title">
    //                 <h3>{item.name}</h3>
    //               </div>
    //             </div>
    //           )
    //         })
    //       ):""
    //     }
  
    //   </>
    // )

    {
        const keys=[];
        keys.map((itm)=>{
        let districts=this.state.Statedata[itm].districtData
        let district_key = Object.keys(districts)
        })
      
   return (
    
    <div className='row'>
      <div className="col-md-12">
      <Accordion defaultActiveKey="0" className='mt-4'>
       
      <Accordion.Item eventKey="0">
        <Accordion.Header>click here</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
    </div>
  )

}
}


export default Statedata
