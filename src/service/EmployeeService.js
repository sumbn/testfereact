import axios from "axios";


const apitest = "http://localhost:8080/api/v1/employees";


class EmployeeService {

    getEmployees(){
        return axios.get(apitest);
    }
}

export default new EmployeeService()
