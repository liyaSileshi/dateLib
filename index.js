class D {
  constructor(...args) {
    this.date = new Date(...args)
  }

  get year() {
    return this.date.getFullYear()
  }

  // get month() {

  // }

  // get day() {

  // }

  // get hours() {

  // }

  // get mins() {

  // }

  // get secs() {

  // }
}

const d = new D(2019, 0, 23)
const year = d.year // 2019
console.log(year)