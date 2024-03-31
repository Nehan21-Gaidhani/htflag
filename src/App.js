import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import CardComp from './Components/CardComp';


import pdf3 from './assests/logo512.png';//sample
import pdf1 from './assests/sample.py';//sample

function App() {
  return (
    
    <div className="App">
      <NavbarComp></NavbarComp>
      <h3 className='heading'> CRYPTOGRAPHY</h3>    
      <div className="d-flex flex-wrap justify-content-evenly"> 
        <CardComp title ="FLOPPY" description="10 points" alertDesc="Using the Credentials from the letter, you logged into the Foobanizer9000-PC. It has a floppy drive... why? There is an .ico file on the disk, but it doesnt smell right... " questionId={1} pdfPath={pdf1} ></CardComp>
        <CardComp title ="Question 2" description="Description 2"  questionId={2}></CardComp>
        <CardComp title ="Question 3" description="Description 3"  pdfPath={pdf3}questionId={3}></CardComp>
      </div>
        <h3 className='heading'>FORENSICS</h3>
        <div className="d-flex flex-wrap justify-content-evenly" id='card'> 
        <CardComp title="Chromatographics" description="5 points" alertDesc="You've been provided with an image file that was recovered from a suspect's computer. The suspect is suspected of unauthorized access to confidential documents. Your task is to analyze the image file and retrieve any hidden information or clues that might be relevant to the investigation"></CardComp>
        <CardComp title="Quesion 5" description="Description 5"></CardComp>
        <CardComp title="Quesion 6" description="Description 6"></CardComp>
        
      </div>
      <h3 className='heading'>WEB</h3>
      <div className="d-flex flex-wrap justify-content-evenly" id='card'> 
      <CardComp title="Security Assessment" description="The application allows ..."  alertDesc="The application allows users to browse products, add them to their cart, and proceed to checkout. Your objective is to identify and report any potential security vulnerabilities in the webapplication."></CardComp>
        <CardComp title="Quesion 8" description="Description 8"></CardComp>
        <CardComp title="Quesion 9" description="Description 9"></CardComp>
        
      </div>

      <h3 className='heading'>OSINT</h3>
      <div className="d-flex flex-wrap justify-content-evenly" id='card'> 
      <CardComp title="Person Of Interest" description="You've been tasked ..." alertDesc="You've been tasked with conducting an Open Source Intelligence (OSINT) investigation on a person of interest (POI) involved in a corporate espionage case. Your goal is to gather relevant information about the individual from publicly available sources to aid in the investigation." ></CardComp>
        <CardComp title="Quesion 11" description="Description 11"></CardComp>
        <CardComp title="Quesion 12" description="Description 12"></CardComp>
      </div>
      
      </div>
  );
}

export default App;