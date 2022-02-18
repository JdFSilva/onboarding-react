const http = (endpoint: string, httpMethod: string) => {
  const config = {
    method: httpMethod,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    },
  }

  return window
    .fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, config)
    .then((response) => response.json())
}

export default http
