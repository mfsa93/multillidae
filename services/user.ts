export const getUser = () => {
  return fetch('http://localhost:3001/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).then((res) => {
    if (res.status === 200) {
      return res.json()
    }
    throw new Error('Error while getting user')
  })
}
