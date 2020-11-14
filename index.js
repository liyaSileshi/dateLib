class Pendulum {
  constructor(...args) {
    this.date = new Date(...args)
    this.months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August', 'September',
      'October', 'November', 'December'
    ]

    this.months_short = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
  }

  get year() {
    return this.date.getFullYear()
  }

  get year_short() {
    return this.date.getFullYear().toString().slice(2)
  }

  get month() {
    const monthIndex = this.date.getMonth() //get the month index
    return this.months[monthIndex] //get the month string
  }

  get month_short() {
    const monthIndex = this.date.getMonth() //get the month index
    return this.months_short[monthIndex]
  }

  get day() {
    return this.date.getDate()
  }

  get day_padded() {
    const day = this.day
    if (day < 10) {
      return '0' + day.toString() //ask Mitchell
    } else {
      return day
    } 
  }

  get hours() {
    return this.date.getHours()
  }

  get hours_padded() {
    if (this.hours < 10) {
      return '0' + this.hours.toString()
    } else {
      return this.hours
    }
  }

  get mins() {
    return this.date.getMinutes()
  }

  get mins_padded() {
    if (this.mins < 10) {
      return '0' + this.mins.toString()
    } else {
      return this.mins
    }
  }

  get secs() {
    return this.date.getSeconds()
  }

  get secs_padded() {
    if (this.secs < 10) {
      return '0' + this.secs.toString()
    } else {
      return this.secs
    }
  }

  format(str=null) {
    //make a mapper
    const unmask = {
      'Y': this.year, //year full
      'y': this.year_short, //year short
      'M': this.month, //month full
      'm': this.month_short, //month short
      'D': this.day_padded, //day padded
      'd': this.day, //day
      'H': this.hours_padded, //hours padded
      'h': this.hours, //hours
      'I': this.mins_padded, //mins padded
      'i': this.mins, //minutes
      'S': this.secs_padded, //secs padded
      's': this.secs //seconds
    }

    //if no format is given
    if (str == null) {
      return `${unmask['Y']} ${unmask['M']} ${unmask['D']}`
    }

    let result = ''
    //loop over the string and 
    for (let i=0; i < str.length; i++) {
      let ch = str[i]
      if (ch in unmask) {
        result += unmask[ch]
      }
      else {
        result += ch
          //else append the ch
      }
    }
    return result;
  }

  when() {
    const curr = new Date()
    let diff = curr.getTime() - this.date.getTime()
    //check if there is no difference
    if (diff == 0) {
      return 'now'
    }
    //check if there is a seconds difference
    //calculate seconds
    diff /= 1000
    if (Math.abs(diff) <= 44) {
      return `a few seconds ` +  (diff < 0 ? `from now`: `ago`)
    }

    if (Math.abs(diff) == 44) {
      return `${Math.abs(diff).toFixed(0)} seconds ` + (diff < 0 ? `from now`: `ago`)
    }

    if (Math.abs(diff) >= 44 && Math.abs(diff) <= 89) {
      return `a minute ` + (diff < 0 ? `from now`: `ago`)
    }

    // calculate minute
    diff /= 60
    if (Math.abs(diff) >= 1.5 && Math.abs(diff) <= 44) {
      return `${Math.abs(diff).toFixed(0)} minutes ` + (diff < 0 ? `from now`: `ago`)
    }

    //an hour
    if (Math.abs(diff) > 44 && Math.abs(diff) <= 89) {
      return `an hour ` + (diff < 0 ? `from now`: `ago`)
    }

    //calculate hour
    diff /= 60
    if (Math.abs(diff) > 1.5 && Math.abs(diff) <= 21) {
      return `${Math.abs(diff).toFixed(0)} hours ` + (diff < 0 ? `from now`: `ago`)
    }

    // a day
    if (Math.abs(diff) > 21 && Math.abs(diff) <= 35) {
      return `a day ` + (diff < 0 ? `from now`: `ago`)
    }

    //calculate days
    diff /= 24
    if (Math.abs(diff) > 1.6 && Math.abs(diff) <= 25) {
      return `${Math.abs(diff).toFixed(0)} days ` + (diff < 0 ? `from now`: `ago`)
    }

    // a month
    if (Math.abs(diff) > 25 && Math.abs(diff) < 45) {
      return `a month ` + (diff < 0 ? `from now`: `ago`)
    }

    //calculate months
    diff /= 30
    if (Math.abs(diff) >= 1.4 && Math.abs(diff) <= 10.5) {
      return `${Math.abs(diff).toFixed(0)} months ` + (diff < 0 ? `from now`: `ago`)
    }

    // year
    diff /= 12
    return `${Math.abs(diff).toFixed(0)} year` + (Math.abs(diff) < 1.5 ? ' ': 's ') + (diff < 0 ? `from now`: `ago`)
  }
}



// const d = new Pendulum(2017, 0, 2, 3, 4, 5)
// console.log(d.format())
// console.log(d.format('y/m/D'))
// console.log(d.format('y/m/d'))       // 17/Jan/2
// console.log(d.format('H:I:S'))       // 03:04:05
// console.log(d.format('h:i:s'))       // 3:4:5
// console.log(d.format('Y-M-D h:I:S'))
// const year = d.year // 2019
// console.log(year)
// console.log(d.month)
// console.log(d.day - 1)
// console.log(d.hours)
// console.log(d.mins)
// console.log(d.secs)
const d = new Pendulum(2022,10,20)
// const d = new Pendulum()
console.log(d.when()) // today