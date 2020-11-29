const makeRequest = (url, params = {}) => fetch(url, params)

// Make regular get request
export const getJS = (url) => makeRequest(url).then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error("Something went wrong.");
})

// Make regular post request
export const postJS = (url, body) => {
  const params = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {}
  };
  params['Content-Type'] = 'application/json';

  return makeRequest(url, params).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Something went wrong.");
  })
}
