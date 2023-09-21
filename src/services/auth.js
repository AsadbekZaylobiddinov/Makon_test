import axios from "axios";

export async function Authenticate(password, phone_number){
    return await axios.post('/Auth/authenticate', {
    phone: phone_number,
    password: password
    })
}