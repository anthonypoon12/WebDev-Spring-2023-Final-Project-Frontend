
import { Link } from "react-router-dom";


const NewTaskView = (props) => {
  const {handleChange, handleSubmit, error } = props;

  return (
    <div className="root">
      <Link to={`/tasks`} className="backBtn">Back to All Tasks</Link>
      <div className="formContainer">
        <div className="formTitle">
          <h2>
            New Task
          </h2>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Title: </label>
          <input type="text" name="title" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Priority: </label>
          <input type="text" name="priority" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>employeeId: </label>
          <input type="text" name="employeeId" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <button type="submit">
            Submit
          </button>
          <br/>
          <br/>
        </form>
        {error!=="" && <p>{error}</p>}
        </div>
      </div>
    
  )
}

export default NewTaskView;