export class NumberHelper {

  static divisionIntoDigits = (digits: number): string => {
    return digits.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  static toFixedWithountNaN = (number: number, toFixed: number = 2) => {
    const toFixedNumber: any = number.toFixed(toFixed)
    return isNaN(toFixedNumber) ? 0 : toFixedNumber
  }

}