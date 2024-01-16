import Axios from 'axios'

function findAll(){
    return Axios.get("http://apicourse.myepse.be/api/customers")
                .then(response => response.data['hydra:member'])
}

function deleteCustomers(id){
    return Axios.get("http://apicourse.myepse.be/api/customers/${id}");
}

export default {
    findAll: findAll,
    delete: deleteCustomers
}