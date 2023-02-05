export function msToHMS(ms) { 
  return new Date(ms).toISOString().slice(11,19)
}

export function dateToDDMMYYYY(date) {
  return new Date(date).toLocaleDateString()
}
