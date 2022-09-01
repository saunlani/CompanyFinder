const requestOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
}
export const getCompanies = () =>
  fetch("http://localhost:5002/api/v1/companies", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        return data.data
      }
      else return []
    })
    .catch((error) => {
      throw new Error(error)
    })