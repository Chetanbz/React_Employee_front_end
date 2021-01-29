import config from "../config/config";
import AxiosService from "./AxiosService";


const service = new AxiosService();
export default class EmployeeService {
    baseUrl = config.baseUrl;
    addEmployee(requestData) {
        return service.Post('/create', requestData);
    }

    getAllEmployeeData() {
        return service.get();
    }

    getEmployeeById(id) {
        return service.Get('/get/' + id);
    }

    updateEmployeeData(empId,requestData) {
        return service.put('/update/'+empId, requestData)
    }

    deleteEmployeeData(requestData) {
        return service.delete('/delete/', requestData)
    }
}