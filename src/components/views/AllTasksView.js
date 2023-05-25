import { Link } from "react-router-dom";

const AllTasksView = (props) => {
  let {tasks, deleteTask} = props;
  //tasks = [{id: 300, title: "hello"}]
  if (!tasks.length) {
    return (
    <div>
      <p>There are no tasks.</p>
      <Link to={`/newtask`}>
        <button>Add New Task</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div>
      <h1>All Tasks</h1>
      {tasks.map((task) => {
        let title = task.title;
        return (
          <div key={task.id}>
          <br />
          <Link to={`/task/${task.id}`} style={{border: "0", backgroundColor: "beige"}}>
            {title}
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