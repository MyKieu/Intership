import { Button, makeStyles, Switch } from "@material-ui/core";
import React from "react";
import {Link, Router}from "react-router-dom"
import Education from "./Education";
import Header from "./header";
const useStyles = makeStyles({
 
    headerLink: {
      color: "#0298B8 ",
    },
  });
  
function Basic() {
    
  return (
    <div className="Skill">
      <Button
        className='headerLink'
        component={Link}
        to="/basic/header"
      >
        Header
      </Button>
      <Button
        
        component={Link}
        to="basic/education"
      >
        Education
      </Button>
      <Button
       
        component={Link}
        to="basic/experience"
      >
        Experience
      </Button>
      <Button component={Link} to="basic/skill">
        Skill
      </Button>
      <div>
      <Switch>
        <Router path="/basic/header">
         <Header />
         </Router>
        <Router path="/basic/education">
            <Education/>

        </Router>
      
         </Switch>
        
        </div>
    </div>
   
  );
}

export default Basic;
