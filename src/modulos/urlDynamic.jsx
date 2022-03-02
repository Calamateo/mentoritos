import { useState } from "react";
/*import '../Css/mentorsProfile.css'*/
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";
import { UserProfileInformation } from "./UserProfile";
import {MentorsProfileModule} from "./MentorsProfile";

const UrlDynamic= (props) =>{
    <Router></Router>
const {userId}=useParams();
const {typeP}=useParams();
const [user,steUser]=useState({"hola":""});
const [mentor,setMentor]=useState({"hola":""});

    //props.mentor.state=true;
    // React.useEffect(() => {
    //     fetch(`https://localhost:8080/api/user/${userId}`)
    //       .then((res) => res.json())
    //       .then((data) => setUser(data));
    //     
    //      fetch(`https://localhost:8080/api/mentor/${userId}`)
    //       .then((res) => res.json())
    //       .then((data) => setMentor(data));
    //        
    //   }, [userId]);
    
    //props.mentor.state=true;
    // React.useEffect(() => {
    //     
    //   }, [userId]);
      
    
    if(isNaN(parseInt(userId))) return props.error  


    if( typeP === "userProfileInfo" && user !== null ) return<> {<UserProfileInformation mentorP={props.mentor}/>}</>
    
    if( typeP === "mentorsProfile" && mentor !== null ) return <>{<MentorsProfileModule mentorProfileInformationParameter={props.mentor} 
    setMentorProfileFunction={props.setmentor}
    />}</>

}
export {UrlDynamic}
