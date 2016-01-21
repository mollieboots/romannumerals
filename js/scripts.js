//Business Logic
var wordpuzzle = function(string) {
  return string.replace(/[AEIOUaeiou]/g, "-");
}
