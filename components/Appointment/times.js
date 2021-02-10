export default function getTimes() {
  let tm = new Date()
  tm.setHours(9)
  tm.setMinutes(0)
  let time = tm.toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' })
  let endTime = "19:30"
  let times = []
  while (time !== endTime) {
    times.push(time)
    tm.setMinutes(tm.getMinutes() + 30)
    time = tm.toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' })
  }
  return times
}