class D {
  constructor(...args) {
    this.date = new Date(...args)
    this.months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
  }

  get year() {
    return this.date.getFullYear()
  }

  get month() {
    const monthIndex = this.date.getMonth() //get the month index
    return this.months[monthIndex] //get the month string
  }

  get day() {
    return this.date.getDate()
  }

  get hours() {
    return this.date.getHours()
  }

  get mins() {
    return this.date.getMinutes()
  }

  get secs() {
    return this.date.getSeconds()
  }
}

const d = new D()
const year = d.year // 2019
console.log(year)
console.log(d.month)
console.log(d.day)
console.log(d.hours)
console.log(d.mins)
console.log(d.secs)