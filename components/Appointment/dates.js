// import moment from 'moment';
// moment.locale('ru')
export default function getDates() {
    // Make dates ---------------------------
    let dt = new Date()
    let dates = []
    let doc_num = []
    let opt = {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    }
    let date = ''
    let days_count = 20
    for (let i = 0; i < days_count; i++) {
      dt.setDate(dt.getDate() + i)
      date = dt.toLocaleString('rus', opt);
      dates.push(date)
      doc_num.push(Math.floor(Math.random() * Math.floor(days_count)))
      dt.setDate(dt.getDate() - i)
    }
    // -------------------------------------------------------
   return {dates, doc_num}
}