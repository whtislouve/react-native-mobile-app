export class StringHelper {

  static iosPathResolver = (path: string): string => {
    return path.replace('file://', '')
  }

  static findLastMatchTakeSubstring = (string: string, searchString: string) => {
    return string.substring(string.lastIndexOf(searchString) + 1)
  }

  static search = (value: string, searchValue: string): boolean => {
    return value.toLowerCase().includes(searchValue.toLowerCase())
  }

  static capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  
}