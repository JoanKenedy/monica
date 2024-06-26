const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAYS = HOUR * 24
const END_DATE = 1718355600000
const date = new Date(END_DATE).getTime()

const $timer = [...document.querySelectorAll('#timer')]

const intervalCountdown = () => {
  const now = new Date().getTime()
  const diff = date - now
  const dayText = Math.floor(diff / DAYS).toString().padStart(2, '0')
  const hourText = Math.floor((diff % DAYS) / HOUR).toString().padStart(2, '0')
  const minuteText = Math.floor((diff % HOUR) / MINUTE).toString().padStart(2, '0')
  const secondText = Math.floor((diff % MINUTE) / SECOND).toString().padStart(2, '0')

  $timer[0].innerHTML = dayText
  $timer[1].innerHTML = hourText
  $timer[2].innerHTML = minuteText
  $timer[3].innerHTML = secondText
}

intervalCountdown()

setInterval(() => {
  intervalCountdown()
}, SECOND)