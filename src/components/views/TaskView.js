import { Link } from "react-router-dom";

const TaskView = (props) => {
  const { task } = props;
  return (
    <div>
      <Link to={`/tasks`} className="backBtn">Back to All Tasks</Link>
      <h1>{"Task: " + task.title}</h1>
      {task.employee ? <Link to={`/employee/${task.employeeId}`} style={{border: "0"}}>Employee: {task.employee.firstname + " " + task.employee.lastname}</Link> : "Employee: N/A"}
      <br/>
      <br/>
      <Link to={`/edittask/${task.id}`}>Edit task information</Link>
      <br/>
      <br/>
      <Link to={`/tasks`}>View all tasks</Link>
    </div>
  );

};

export default TaskView;