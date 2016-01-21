var checkForFourOrNine = function(string) {
  if ((string.match(/[49]/)) !== null) {
    return true;
  } else {
    return false;
  }
};

var checkForMultiples = function(resultArray) {
  if ((resultArray.match(/[MDCLXVI]{4,}/)) !== null) {
    return true;
  } else {
    return false;
  }
};

var decompose = function(number) {
  var components = [1000, 500, 100, 50, 10, 5, 1];
  var resultArray = [];
  for(var index = number; index >= 0; index -= component)
    if (number % components[0] < number) {
      resultArray.push(components[0]);
      number -= components[0];
      var component = components[0];
    } else if (number % components[1] < number) {
      resultArray.push(components[1]);
      number -= components[1];
      var component = components[1];
    } else if (number % components[2] < number) {
      resultArray.push(components[2]);
      number -= components[2];
      var component = components[2];
    } else if (number % components[3] < number) {
      resultArray.push(components[3]);
      number -= components[3];
      var component = components[3];
    } else if (number % components[4] < number) {
      resultArray.push(components[4]);
      number -= components[4];
      var component = components[4];
    } else if (number % components[5] < number) {
      resultArray.push(components[5]);
      number -= components[5];
      var component = components[5];
    } else if (number % components[6] < number) {
      resultArray.push(components[6]);
      number -= components[6];
      var component = components[6];
    }
    return resultArray;
};

var convertToRomanNumerals = function(resultArray) {
  var stringResultArray = resultArray.toString();
  stringResultArray = stringResultArray.replace(/[,]/g, "");
  stringResultArray = stringResultArray.replace(/1000/g, "M");
  stringResultArray = stringResultArray.replace(/500/g, "D");
  stringResultArray = stringResultArray.replace(/100/g, "C");
  stringResultArray = stringResultArray.replace(/50/g, "L");
  stringResultArray = stringResultArray.replace(/10/g, "X");
  stringResultArray = stringResultArray.replace(/5/g, "V");
  stringResultArray = stringResultArray.replace(/1/g, "I");
  resultArray = stringResultArray;
  return resultArray;
};
