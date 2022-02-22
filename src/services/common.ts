const http = async (endpoint: string, httpMethod: string) => {
  const config = {
    method: httpMethod,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    },
  }

  const resp = await window.fetch(
    `${process.env.REACT_APP_API_URL}${endpoint}`,
    config
  )

  if (!resp.ok) {
    const message = `An error has occured: ${resp.status}`
    throw new Error(message)
  }

  return resp.json()
}

export default http
