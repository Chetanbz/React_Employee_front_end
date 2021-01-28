import { Link, withRouter } from "react-router-dom"
import './home.css';
import deleteIcon from '../../assets/delete-black-18dp.svg';
import editIcon from '../../assets/create-black-18dp.svg';
import profile from '../../assets/Ellipse -3.png'
import EmployeeService from "../../services/EmployeeService";

const service = new EmployeeService();
const Display = (props) => {

  const updateEmployeeData =(employee) => {
    //localStorage.setItem('isUpdate', empId);
    console.log(employee);
    window.open(`http://localhost:3000/PayrollForm`);
    service.updateEmployeeData(employee)
  }

  const deleteEmployeeData = (empId) => {
    console.log("Delate Operation");
    service.deleteEmployeeData(empId).then(() => {
      console.log("deleted successfully");
      this.setState({update: "updates"});
      <Link to="PayrollForm"></Link>
      // this.props.callUpdate();
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <table id="table-diplay" className="table">
      <tbody>
        <tr key={-1}>
          <th></th>
          <th>Name</th>
          <th>Gender</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Start Date</th>
          <th>Actions</th>
        </tr>
        {
          props.employeeArray && props.employeeArray.map((element, ind) => (
            <tr key={ind}>
              <td><img className="profile" src={profile} alt="image" /></td>
              <td>{element.employeeId}{element.name}</td>
              <td>{element.gender}</td>
              <td>{element.department && element.department.map(dept => (
                <div className="dept-label">{dept}</div>
              ))}</td>
              <td>{element.salary}</td>
              <td>{element.startDate}</td>
              <td><img onClick={() => deleteEmployeeData(element.employeeId)} src={deleteIcon} alt="delete" />
                <img onClick={() => updateEmployeeData(element)} src={editIcon} alt="edit" />
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
export default withRouter(Display);