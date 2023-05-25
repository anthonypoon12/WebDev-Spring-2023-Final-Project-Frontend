import { Link } from "react-router-dom";

const TaskView = (props) => {
  const { task } = props;
  return (
    <div>
      <Link to={`/tasks`} className="backBtn">Back to All Tasks</Link>
      <h1>{"Task: " + task.title}</h1>
      {task.employee ? <Link to={`/employee/${task.employeeId}`}>Employee: {task.employee.firstname + " " + task.employee.lastname}</Link> : "Employee: N/A"}
      <br/>
      <br/>
      <h1>{task.title}</h1>
      {task.employee ? <Link to={`/employee/${task.employeeId}`}><h3>{task.employee.firstname + " " + task.employee.lastname}</h3></Link>: <h3>staff</h3>}
      <Link to={`/edittask/${task.id}`}>Edit task information</Link>
      <br/>
      <br/>
      <Link to={`/tasks`}>View all tasks</Link>
    </div>
  );

};

export default TaskView;