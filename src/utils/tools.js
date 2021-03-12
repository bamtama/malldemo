String.prototype.padStart =  function (len, padstr) {
  if (this === undefined) {
    return this
  } else {
    let newstr = this
    if (this.length < len) {
      newstr =  (new Array(len - this.length).fill(padstr)).toString() + this;
    }
    return newstr
  }
}
Number.prototype.padStart = function (len, padstr) {
  return this.toString().padStart(len, padstr)
}
export default {
  randomChar (len) {
    let arr = []
    for (let i = 0; i < len; i++) {
      arr.push(String.fromCharCode(Math.ceil(Math.random()*(90 - 65) + 65)))
    }
    return arr.join('')
  },
  randomInt (min = 0, max = 20) {
    return Math.ceil(Math.random() * (max - min) + min)
  },
  randomDate (datestr) {
    let t = new Date(datestr) == 'Invalid Date' ? new Date() : new Date(datestr)
    let [y, m, d, h, min, sec] = [
      t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds()
    ]
    return `${y}-${m}-${d} ${h}:${min.padStart(2, '0')}:${sec.padStart(2, '0')}`
  }
}