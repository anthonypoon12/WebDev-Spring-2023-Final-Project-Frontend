import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllEmployeesView = (props) => {
  if (!props.allEmployees.length) {
    return <div>There are no employees.</div>;
  }

  return (
    <div>
      {props.allEmployees.map((employee) => {
        let name = employee.firstname + " " + employee.lastname;
        return (
          <div key={employee.id}>
            <br />
          <Link to={`/employee/${employee.id}`} style={{border: "0", backgroundColor: "beige"}}>
            {name}
          </Link>
          <button onClick={() => props.deleteEmployee(employee.id)}>Delete</button>
          <div style={{margin: "2px", fontSize: "75%"}}>Department: {employee.department ? employee.department : "None"}</div>
          {/* <button onClick={() => console.log(props)}>Delete</button> */}
        </div>
        );

      })}

      <br />
      <br />
      <Link to={`/newemployee`}>
        <button>Add New Employee</button>
      </Link>
    </div>
  );
};

AllEmployeesView.propTypes = {
  allEmployees: PropTypes.array.isRequired,
};

export default AllEmployeesView;