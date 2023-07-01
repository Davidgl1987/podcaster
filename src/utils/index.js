export const URL_CORS = 'https://corsproxy.io/?'

export async function fetchOrCache({ url, key, cacheTime = 24*60*60*1000 }) {
  if (!url || !key) console.error('Missing params url or key')
  let data = null
  try{
    data = localStorage.getItem(key)
    if (data) {
      data = JSON.parse(data)
      if (Date.now() - data.timestamp > cacheTime) {
        localStorage.removeItem(key)
        data = null
      }
    }
    if (!data) {
      const response = await fetch(`${URL_CORS}${encodeURIComponent(url)}`)
      data = await response.json();
      data.timestamp = Date.now()
      localStorage.setItem(key, JSON.stringify(data))
    }
  } catch (error) {
    console.error(error)
  } 
  return data
}

export function msToHMS(ms) { 
  return new Date(ms).toISOString().slice(11,19)
}

export function dateToDDMMYYYY(date) {
  return new Date(date).toLocaleDateString()
}
