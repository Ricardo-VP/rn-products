const months = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
]

export function formatDate(fecha: Date) {
  const dateObj = new Date(fecha)
  const day = dateObj.getDate()
  const month = months[dateObj.getMonth()]
  const year = dateObj.getFullYear()

  return `${day} de ${month}, ${year}`
}

export function getActualMonth() {
  const date = new Date()
  const month = months[date.getMonth()]

  return month
}
