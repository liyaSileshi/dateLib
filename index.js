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

  // get day() {

  // }

  // get hours() {

  // }

  // get mins() {

  // }

  // get secs() {

  // }
}

const d = new D(2019, 3, 23)
const year = d.year // 2019
console.log(year)
console.log(d.month)