import axios from 'axios'
axios.defaults.withCredentials = true

export async function onRegistration(registrationData) {
  return await axios.post(
    'https://healthydent-production.up.railway.app/register',
    registrationData
  )
}

export async function onLogin(loginData) {
  return await axios.post('https://healthydent-production.up.railway.app/login', loginData)
}

export async function onLogout() {
  return await axios.get('https://healthydent-production.up.railway.app/logout')
}

export async function getProfessional(){
  return await axios.get('https://healthydent-production.up.railway.app/search')
}

export async function registerProfessional(registerData){
  return await axios.post('https://healthydent-production.up.railway.app//register/professional', registerData)
}


