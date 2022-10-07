import axios from 'axios'
axios.defaults.withCredentials = true

export async function onRegistration(registrationData) {
  return await axios.post(
    'http://localhost:4000/register',
    registrationData
  )
}

export async function onLogin(loginData) {
  return await axios.post('http://localhost:4000/login', loginData)
}

export async function onLogout() {
  return await axios.get('http://localhost:4000/logout')
}

export async function getProfessional(){
  return await axios.get('http://localhost:4000/search')
}

export async function registerProfessional(registerData){
  return await axios.post('http://localhost:4000/register/professional', registerData)
}


