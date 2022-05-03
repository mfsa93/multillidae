export function SignUp(user: {
  username: string
  password: string
  signature: string
}) {
  return fetch('http://localhost:3001/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.status === 200) {
        return true
      }
      throw new Error('Error while creating user')
    })
    .catch((err) => {
      console.log(err)
    })
}

export function SignIn(user: { username: string; password: string }) {
  return fetch('http://localhost:3001/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json()
      }
      throw new Error('Error while logging in')
    })
    .catch((err) => {
      console.log(err)
    })
}

export function isLoggedIn() {
  try {
    const token = localStorage.getItem('token')
    if (token) {
      return true
    }
    return false
  } catch (err) {
    return false
  }
}
