export async function getVans() {
  const res = await fetch('/api/vans')
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