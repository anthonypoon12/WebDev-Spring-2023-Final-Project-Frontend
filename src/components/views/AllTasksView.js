import { Link } from "react-router-dom";

const AllTasksView = (props) => {
  let {tasks, deleteTask} = props;
  //tasks = [{id: 300, description: "hello"}]
  if (!tasks.length) {
    return (
    <div>
      <Link to={`/`} className="backBtn">Back to Home Page</Link>
      <h1>All Tasks</h1>
      <p>There are no tasks.</p>
      <Link to={`/newtask`}>
        <button>Add New Task</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div>
      <Link to={`/`} className="backBtn">Back to Home Page</Link>
      <h1>All Tasks</h1>
      {tasks.map((task) => {
        let description = task.description;
        return (
          <div key={task.id}>
          <br />
          <Link to={`/task/${task.id}`} style={{border: "0", backgroundColor: "beige"}}>
            {description}
          </Link>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        );
      }
      )}
      <br />
      <Link to={`/newtask`}>
        <button>Add New Task</button>
      </Link>
    </div>
  );
};


export default AllTasksView;