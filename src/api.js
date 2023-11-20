export async function getVans(id) {
  const res = id ? await fetch(`/api/vans/${id}`) : await fetch('/api/vans')
    
  if (!res.ok) {
    throw {
      message: 'failed to fetch data',
      status: res.status,
      statusText: res.statusText
    }
  }
  const data = await res.json()
  return data.vans
}


export async function getHostVans(id) {
  const res = id ? await fetch(`/api/host/vans/${id}`) : await fetch(`/api/host/vans`)

  if (!res.ok) {
    throw {
      message: 'failed to fetch data',
      status: res.status,
      statusText: res.statusText
    }
  }
  const data = await res.json()
  return data.vans
}

export async function loginUser(creds) {
  const res = await fetch('/api/login', { method: 'post', body: JSON.stringify(creds) })
  
  const data = await res.json()
   if (!res.ok) {
    throw {
      message: data.message,
      status: res.status,
      statusText: res.statusText
    }
  }
  return data
}