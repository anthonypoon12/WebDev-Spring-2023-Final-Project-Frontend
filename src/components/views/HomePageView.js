

import { Link } from 'react-router-dom';



const HomePageView = () => {
  return (
    <div>
      <h1>Anthony Poon's Final Project</h1>
      This is a project that displays the employees and tasks of a workplace
      <br />
      <br />
      <Link to={'/employees'} > All Employees </Link>
      <br />
      <br />
      <Link to={'/tasks'} > All Tasks </Link>
      
    </div>
  );    
}




export default HomePageView;
