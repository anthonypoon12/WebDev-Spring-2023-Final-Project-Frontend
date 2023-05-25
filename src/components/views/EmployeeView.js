import { Link } from "react-router-dom";


const EmployeeView = (props) => {
  const {employee, editTask, allTasks} = props;
  let assignedTasks = allTasks.filter(task => task.employeeId===employee.id);
  let availableTasks = allTasks.filter(task => task.employeeId!==employee.id);
  
  return (
    <div>      
      <Link to={`/employees`} className="backBtn">Back to All Employees</Link>
      <h1>{employee.firstname} {employee.lastname}</h1>
      <h3>{employee.department}</h3>
      <Link to={`/editemployee/${employee.id}`}>Edit employee information</Link>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <div>Assigned tasks:
        {assignedTasks.map( task => {
          return (
            <div key={task.id}>
              <br />
            <Link to={`/task/${task.id}`}>
              {task.title}
            </Link>
            <button onClick={() => editTask({id:task.id, employeeId: null})}>x</button>
            </div>
          );
        })}</div>
        <br />
        <div>Available tasks:
        {availableTasks.map( task => {
          return (
            <div key={task.id}>
              <br />
            <Link to={`/task/${task.id}`}>
              {task.title}  
            </Link>
            <button onClick={() => editTask({id:task.id, employeeId: employee.id})}>+</button>
            </div>
          );
        })}</div>

      </div>

  
    </div>
  );

};

export default EmployeeView;