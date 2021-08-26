export class FormValidator {
  static isValidEmail = (email: string): boolean => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  }
}