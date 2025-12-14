import axios from 'axios'

const api = axios.create({
    baseURL: 'https://backend-login-production-ffad.up.railway./usuarios'
})
export default api