export function Greeting() {
  const d = new Date()
  const hrs = d.getHours()

  let str
  if (hrs < 12) {
    str = 'Bom dia'
  } else if (hrs >= 12 && hrs <= 18) {
    str = 'Boa tarde'
  } else if (hrs >= 17 && hrs <= 24) {
    str = 'Boa noite'
  } else {
    str = 'Bem-vindo(a)!'
  }

  return str
}
