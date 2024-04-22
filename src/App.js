import React, { useState ,useEffect} from 'react';
import { Dropdown } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import "./index.css"
import img1 from "./citizen_distribution.PNG"
import img2 from "./citizen voting system bi.PNG"
import img3 from "./sector wise.PNG"
import img4 from "./without shadow.PNG"
import { Table } from 'rsuite';
import { Button, ButtonGroup, ButtonToolbar } from 'rsuite';
import { COLUMN_SIZE } from 'rsuite/esm/utils/constants';
const App = () => {
  const dropdownButtonStyles = {
    backgroundColor: 'red', 
    color: '#fff', 

  };
  const { Column, HeaderCell, Cell } = Table;
  const [department, setdepartment] = useState("")
const [location, setlocation] = useState("")
const [currProject, setcurrProject] = useState("")
// const projects = [
// {department:"Water Department",location:"Pune Rural", name:"Project1"},
// {department:"Water Department",location:"Pune Centeral", name:"Project2"},
// {department:"Water Department",location:"Pune Rural", name:"Project3"},
// {department:"Water Department",location:"Pune South", name:"Project4"},
// {department:"Slum Rehabilitation Departement",location:"Pune South", name:"Project5"},
// {department:"Slum Rehabilitation Departement",location:"Pune Rural", name:"Project6"},
// {department:"Slum Rehabilitation Departement",location:"Pune South", name:"Project7"},
// {department:"Slum Rehabilitation Departement",location:"Pune Rural", name:"Project8"},
// {department:"Property Tax Department",location:"Pune South", name:"Project9"},
// {department:"Property Tax Department",location:"Pune Centeral", name:"Project10"},
// {department:"Property Tax Department",location:"Pune Rural", name:"Project11"},
// {department:"Property Tax Department",location:"Pune North", name:"Project12"}]4
const projects = [
  {project_path:"/proj_images/P1.PNG",image_path:"/department_problems/URBAN DEV.PNG",department:"Urban Development",location:"Koregaon Park", name:"Road Repair and Maintenance", fund:"80 Lakhs" , startdate : "March 2017" , duration : "6 Months", beneficiaries : "Citizen", status : "Completed" , description: "All necessary repairs and upgrades have been finished , ensuring safer and smoother travel for commuters."},
  {project_path:"/proj_images/P2.PNG",image_path:"/department_problems/URBAN DEV.PNG",department:"Urban Development",location:"Aundh", name:"Street Lighting Improvement", fund:"90 Lakhs" , startdate : "September 2018" , duration : "9 Months", beneficiaries : "Citizen", status : "Completed" , description: "Installation and activation of streetlights across designated areas to enhance safety and visibility during nighttime."},
  {project_path:"/proj_images/P3.PNG",image_path:"/department_problems/Health.PNG",department:"Urban Development",location:"Aundh", name:"Park Renovation", fund:"50 Lakhs" , startdate : "January 2022" , duration : "5 Month", beneficiaries : "Citizen", status : "Completed" , description: "Transformation of park facilities and landscaping to create an enhanced recreational environment for the community."},
  {project_path:"/proj_images/P4.PNG",image_path:"/department_problems/Health.PNG",department:"Health",location:"Koregaon Park", name:"Community Health Clinic", fund:"1 cr" , startdate : "December 2023" , duration : "On-going", beneficiaries : "Citizen", status : "On-going" , description: "Local healthcare facility that provides medical services and preventive care to residents."},
  {project_path:"/proj_images/P5.PNG",image_path:"/department_problems/Health.PNG",department:"Health",location:"Koregaon Park", name:"Sanitation Awareness Campaign" , fund:"50 Lakhs" , startdate : "January 2021" , duration : "5 Month", beneficiaries : "Citizen", status : "Completed" , description: "Sanitation Awareness Campaign aimed to educating residents on proper sanitation practices."},
  {project_path:"/proj_images/P6.PNG",image_path:"/department_problems/Health.PNG",department:"Health",location:"Shivaji Nagar", name:"Sanitation Awareness Campaign",fund:"50 Lakhs" , startdate : "January 2021" , duration : "2 Month", beneficiaries : "Citizen", status : "Completed" , description: "Sanitation Awareness Campaign aimed to educating residents on proper sanitation practices."},
  {project_path:"/proj_images/P7.PNG",image_path:"/department_problems/education.PNG",department:"Education",location:"Shivaji Nagar", name:"Digital Learning Initiative",fund:"50 Lakhs" , startdate : "July 2022" , duration : "7 Month", beneficiaries : "Students", status : "Completed" , description: "The Digital Learning Initiative in schools aims to enhance education."},
  {project_path:"/proj_images/P8.PNG",image_path:"/department_problems/education.PNG",department:"Education",location:"Shivaji Nagar", name:"School Infrastructure Upgrade",fund:"1 cr" , startdate : "January 2022" , duration : "11 Month", beneficiaries : "Students", status : "Completed" , description: "Involves improvements and modernization of facilities."},
  {project_path:"/proj_images/P9.PNG",image_path:"/department_problems/education.PNG",department:"Education",location:"Aundh", name:"Digital Learning Initiative",fund:"50 Lakhs" , startdate : "June 2023" , duration : "4 Month", beneficiaries : "Students", status : "Completed" , description: "The Digital Learning Initiative in schools aims to enhance education."},
  {project_path:"/proj_images/P10.PNG",image_path:"/department_problems/transport.PNG",department:"Transportation",location:"Koregaon Park", name:"Public Bus Expansion",fund:"67 Lakhs" , startdate : "June 2018" , duration : "6 Month", beneficiaries : "Citizens", status : "Completed" , description: "Improve transportation accessibility in the area."},
  {project_path:"/proj_images/P11.PNG",image_path:"/department_problems/transport.PNG",department:"Transportation",location:"Aundh", name:"Cycle Lane Construction",fund:"80 Lakhs" , startdate : "January 2017" , duration : "10 Month", beneficiaries : "Cyclists", status : "Completed" , description: "Construction of cycle lanes to promote eco-friendly transportation and reduce traffic."},
  {project_path:"/proj_images/P12.PNG",image_path:"/department_problems/EC.PNG",department:"Environmental Conservation",location:"Shivaji Nagar", name:"Water Harvesting Initiative",fund:"67 Lakhs" , startdate : "June 2019" , duration : "6 Month", beneficiaries : "Citizens", status : "Completed" , description: "Conserv water resources and promote sustainable practices"},
  {project_path:"/proj_images/P13.PNG",image_path:"/department_problems/EC.PNG",department:"Environmental Conservation",location:"Aundh", name:"Tree Plantation",fund:"95 Lakhs" , startdate : "January 2024" , duration : "On-going", beneficiaries : "Citizens", status : "On-going" , description: "Drive aimed to increasing green cover and biodiversity in the area"}]
const data = [
  {department:"Urban Development",location:"Koregaon Park", name:"Road Repair and Maintenance", fund:"80 Lakhs" , startdate : "March 2017" , duration : "6 Months", beneficiaries : "Citizen", status : "Completed" , description: "All necessary repairs and upgrades have been finished , ensuring safer and smoother travel for commuters."},
  {department:"Urban Development",location:"Aundh", name:"Street Lighting Improvement", fund:"90 Lakhs" , startdate : "September 2018" , duration : "9 Months", beneficiaries : "Citizen", status : "Completed" , description: "Installation and activation of streetlights across designated areas to enhance safety and visibility during nighttime."},
  {department:"Urban Development",location:"Aundh", name:"Park Renovation", fund:"50 Lakhs" , startdate : "January 2022" , duration : "5 Month", beneficiaries : "Citizen", status : "Completed" , description: "Transformation of park facilities and landscaping to create an enhanced recreational environment for the community."},
  {department:"Health",location:"Koregaon Park", name:"Community Health Clinic", fund:"1 cr" , startdate : "December 2023" , duration : "On-going", beneficiaries : "Citizen", status : "On-going" , description: "Local healthcare facility that provides medical services and preventive care to residents."},
  {department:"Health",location:"Koregaon Park", name:"Sanitation Awareness Campaign" , fund:"50 Lakhs" , startdate : "January 2021" , duration : "5 Month", beneficiaries : "Citizen", status : "Completed" , description: "Sanitation Awareness Campaign aimed to educating residents on proper sanitation practices."},
  {department:"Health",location:"Shivaji Nagar", name:"Sanitation Awareness Campaign",fund:"50 Lakhs" , startdate : "January 2021" , duration : "2 Month", beneficiaries : "Citizen", status : "Completed" , description: "Sanitation Awareness Campaign aimed to educating residents on proper sanitation practices."},
  {department:"Education",location:"Shivaji Nagar", name:"Digital Learning Initiative",fund:"50 Lakhs" , startdate : "July 2022" , duration : "7 Month", beneficiaries : "Students", status : "Completed" , description: "The Digital Learning Initiative in schools aims to enhance education."},
  {department:"Education",location:"Shivaji Nagar", name:"School Infrastructure Upgrade",fund:"1 cr" , startdate : "January 2022" , duration : "11 Month", beneficiaries : "Students", status : "Completed" , description: "Involves improvements and modernization of facilities."},
  {department:"Education",location:"Aundh", name:"Digital Learning Initiative",fund:"50 Lakhs" , startdate : "June 2023" , duration : "4 Month", beneficiaries : "Students", status : "Completed" , description: "The Digital Learning Initiative in schools aims to enhance education."},
  {department:"Transportation",location:"Koregaon Park", name:"Public Bus Expansion",fund:"67 Lakhs" , startdate : "June 2018" , duration : "6 Month", beneficiaries : "Citizens", status : "Completed" , description: "Improve transportation accessibility in the area."},
  {department:"Transportation",location:"Aundh", name:"Cycle Lane Construction",fund:"80 Lakhs" , startdate : "January 2017" , duration : "10 Month", beneficiaries : "Cyclists", status : "Completed" , description: "Construction of cycle lanes to promote eco-friendly transportation and reduce traffic."},
  {department:"Environmental Conservation",location:"Shivaji Nagar", name:"Water Harvesting Initiative",fund:"67 Lakhs" , startdate : "June 2019" , duration : "6 Month", beneficiaries : "Citizens", status : "Completed" , description: "Conserv water resources and promote sustainable practices"},
  {department:"Environmental Conservation",location:"Aundh", name:"Tree Plantation",fund:"95 Lakhs" , startdate : "January 2024" , duration : "On-going", beneficiaries : "Citizens", status : "On-going" , description: "Drive aimed to increasing green cover and biodiversity in the area"}]
  const [arr, setarr] = useState([])
var pc = projects.length
const [projectcount, setprojectcount] = useState(pc)
const [details, setdetails] = useState({})
useEffect(() => {
  setarr([])

  setcurrProject("")
  var pro = []
  projects.forEach((project,i)=> {
    if(project.department === department && project.location === location){
      pro.push(project.name)
    } 
  })
  var count = 0;
  if(department != "" && location != ""){
    projects.forEach((project,i)=> {
      if(project.department === department && project.location === location){
        count++
      } 
    })
    
  }else if(department =="" && location != ""){
    projects.forEach((project,i)=> {
      if(project.location === location){
        count++
      } 
    })
  }else if(location == "" && department != ""){
    projects.forEach((project,i)=> {
      if(project.department === department){
        count++
      } 
    })
  }else{
    count = projects.length
  }
  // console.log(department)
  // console.log(location)
  // console.log(pro)
  setarr(pro)
  setprojectcount(count)
 
}, [department,location]);
useEffect(() => {
  projects.forEach((project,i) => {
    // console.log(project)
    console.log(currProject)
    if(project.department === department && project.location === location && project.name === currProject){
      // console.log(project)
      var det = {proj_path:project.project_path,image_path:project.image_path,name:currProject, fund:project.fund,startdate:project.startdate, duration:project.duration,beneficiaries:project.beneficiaries,status:project.status,description:project.description}
      setdetails(det)
      console.log(det)
    }
  })
  // console.log("rishi")

  
}, [currProject,department,location])
const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)', // 4 columns in the first row
  gridTemplateRows: 'auto', // Auto-sized rows
  gap: '20px',
  marginTop: '20px',
};

const gridItemStyle = {
  backgroundColor: 'white',
  border: '2px solid #ccc',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  minHeight: '15vh',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  margin:"10px"
};

const boldSpanStyle = {
  fontWeight: 'bold',
};

  return (
    <div style={{backgroundColor:"#F0F0F0"}} >
      <div style = {{backgroundColor:"#31bcc1",padding:"10px",display:"flex",justifyContent:"center"}}>
         <h2 style={{textAlign:'center',color:"white",fontWeight:"500"}}>Participatory Budget</h2>
         {/* <Button style={{marginLeft:"auto",backgroundColor:"#31bcc1",border:"2px solid white",color:"white",fontWeight:"500",fontSize:"20px"}} active>
      New Suggestion
    </Button> */}
      </div>
    
      {/* div for all dropdowns */}
      <div style={{display:"flex", justifyContent:"center", marginTop:"25px",marginBottom:"30px"}}>
        {/* dropdown 1 */}
      <Dropdown className="custom-dropdown-container" style={{marginRight:"70px", border:"1px solid black",color:'black',backgroundColor:"#31bcc1"}} title={department ==""?"Select Department":department}>
        <Dropdown.Item onSelect={(e) => {
          setdepartment("Urban Development")
          ;
        }}>Urban Development</Dropdown.Item>
        <Dropdown.Item onSelect={(e) => {
          setdepartment("Health")
          ;
        }}>Health</Dropdown.Item>
        <Dropdown.Item onSelect={(e) => {
          setdepartment("Education")
          ;
        }}>Education</Dropdown.Item>
        <Dropdown.Item onSelect={(e) => {
          setdepartment("Transportation")
          ;
        }}>Transportation</Dropdown.Item>
        <Dropdown.Item onSelect={(e) => {
          setdepartment("Environmental Conservation")
          ;
        }}>Environmental Conservation</Dropdown.Item>
     
      </Dropdown>
      
      {/* dropdown 2 */}
      <div className="custom-dropdown-container"style={{backgroundColor:"#31bcc1"}}>
      <Dropdown toggleStyle={dropdownButtonStyles}  style={{ border:"1px solid black"}} title={location ==""?"Select Location":location}>

        <Dropdown.Item onSelect={() => {
          setlocation("Aundh")
          ;
        }}>Aundh</Dropdown.Item>
        <Dropdown.Item onSelect={() => {
          setlocation("Koregaon Park")
          ;
        }}>Koregaon Park</Dropdown.Item>
        <Dropdown.Item onSelect={() => {
          setlocation("Shivaji Nagar")
          ;
        }}>Shivaji Nagar</Dropdown.Item>

      </Dropdown>
      </div>
      {/* dropdown 3 */}
      <Dropdown className="custom-dropdown-container"style={{marginLeft:"70px", border:"1px solid black", marginRight:"70px",backgroundColor:"#31bcc1"}} title={currProject == ""? "Select Project" : currProject}>
      
        {arr.map((item,index) => (
          <Dropdown.Item onSelect={() => {
            setcurrProject(item)
          }} key ={index}>{item}</Dropdown.Item>
        ))}
      </Dropdown>
      
      <div style={{border: '3px solid #ccc',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',padding:"5px"}}>
      <h6>Project Count = {projectcount}</h6>
      </div>
      <div style={{marginLeft:"70px"}}><Button style={{backgroundColor:"#31bcc1",color:"white"}} onClick={() => {
        window.location.reload();
      }}>Clear Selection</Button></div>
      </div>
      
     {arr.length != 0 && currProject != ""?
      <div style={gridContainerStyle}>
      <div style={gridItemStyle}>
        <p style={{ margin: '5px', color: 'black' }}>
          <span style={boldSpanStyle}>Project Name: </span> {details.name}
        </p>
      </div>
      <div style={gridItemStyle}>
        <p style={{ margin: '5px', color: 'black' }}>
          <span style={boldSpanStyle}>Project Department: </span> {department}
        </p>
      </div>
      <div style={gridItemStyle}>
        <p style={{ margin: '5px', color: 'black' }}>
          <span style={boldSpanStyle}>Project Location: </span> {location}
        </p>
      </div>
      <div style={gridItemStyle}>
        <p style={{ margin: '5px', color: 'black' }}>
          <span style={boldSpanStyle}>Project Fund: </span> {details.fund}
        </p>
      </div>
      <div style={gridItemStyle}>
        <p style={{ margin: '5px', color: 'black' }}>
          <span style={boldSpanStyle}>Duration: </span> {details.duration}
          <br />
          <span style={{ ...boldSpanStyle, marginTop: '5px' }}>Start Date: </span> {details.startdate}
        </p>
      </div>
      <div style={gridItemStyle}>
        <p style={{ margin: '5px', color: 'black' }}>
          <span style={boldSpanStyle}>Project Status: </span> {details.status}
        </p>
      </div>
      <div style={gridItemStyle}> {/* This div spans 3 columns */}
        <p style={{ margin: '5px', color: 'black' }}>
          <span style={boldSpanStyle}>Project Beneficiaries: </span> {details.beneficiaries}
        </p>
      </div>
      <div style={gridItemStyle}> {/* This div spans 2 columns */}
        <p style={{ margin: '5px', color: 'black' }}>
          <span style={boldSpanStyle}>Project Description: </span> {details.description}
        </p>
      </div>
      <div style={{ ...gridItemStyle, gridColumn: '1/ span 2' }}> {/* This div spans 2 columns */}
      <img style={{maxWidth:"45vw"}}src={details.image_path}></img>
      </div>
      <div style={{ ...gridItemStyle, gridColumn: '3/ span 2' }}> {/* This div spans 2 columns */}
      <img style={{maxWidth:"45vw"}}src={details.proj_path}></img>
      </div>
      
    </div>:department==="" || location ===""?<div>
                  
                   <div style={{ display: 'flex', flexDirection: 'column' }}>
                   <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <img src={img4} alt="Image 1" style={{width:"80vh", height: '60vh', margin: '5px',borderRadius:"10px",border: '2px solid #ccc',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',borderRadius:"10px"}} />
                      <img src={img2} alt="Image 2" style={{ width:"80vh",height: '60vh', margin: '5px',borderRadius:"10px",border: '2px solid #ccc',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',borderRadius:"10px" }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={img3} alt="Image 1" style={{ width:"80vh", height: '60vh', margin: '5px',borderRadius:"10px",border: '2px solid #ccc',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',borderRadius:"10px" }} />
                    <img src={img1} alt="Image 2" style={{ width:"80vh",height: '60vh', margin: '5px',borderRadius:"10px" ,border: '2px solid #ccc',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',borderRadius:"10px"}} />
                  </div>
                  
                    </div>
                  
                    <div className="table-container">
      <Table virtualized height={500} style={{ marginLeft: "100px", flexGrow: "1",marginRight:"100px",borderRadius:"10px",border: '2px solid #ccc',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'}} data={data}>
        <Column width={190} >
          <HeaderCell>Department</HeaderCell>
          <Cell dataKey='department'/>
        </Column>
        <Column width={170} >
          <HeaderCell>Location</HeaderCell>
          <Cell dataKey='location'/>
        </Column>
        <Column width={270}>
          <HeaderCell>Project Name</HeaderCell>
          <Cell dataKey='name'/>
        </Column>
        <Column width={150}>
          <HeaderCell>Fund</HeaderCell>
          <Cell dataKey='fund'/>
        </Column>
        <Column width={190}>
          <HeaderCell>Start Date</HeaderCell>
          <Cell dataKey='startdate'/>
        </Column>
        <Column width={140}>
          <HeaderCell>Duration</HeaderCell>
          <Cell dataKey='duration'/>
        </Column>
        <Column flexGrow={1}>
          <HeaderCell width={140}>Beneficiaries</HeaderCell>
          <Cell dataKey='beneficiaries'/>
        </Column>
        <Column flexGrow={1}>
          <HeaderCell width={140}>Status</HeaderCell>
          <Cell dataKey='status'/>
        </Column>
      </Table>
    </div>
                 
      </div>:<div></div>}
    
    
    </div>
  )
}

export default App