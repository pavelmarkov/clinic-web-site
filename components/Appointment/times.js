export default function getTimes() {
  return [
     "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", 
     "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", 
     "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00"
  ]
  // let tm = new Date()
  // tm.setHours(9)
  // tm.setMinutes(0)
  // let time = tm.toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' })
  // let endTime = "19:30"
  // let times = []
  // while (time !== endTime) {
  //   times.push(time)
  //   tm.setMinutes(tm.getMinutes() + 30)
  //   time = tm.toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' })
  // }
  // return times
}