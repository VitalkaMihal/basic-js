module.exports = function repeater( str, options ) {
  if (!options){return str;}else {
    if (!options.repeatTimes){
          options.repeatTimes = 0;
      }
      if (options.separator === undefined) {
        options.separator = '+';
      }
      if (options.addition === undefined) {
        options.addition = '';
      }
      if (options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = 0;
      }
      if (options.additionSeparator === undefined) {
        options.additionSeparator = '|';
      }
      let optEnd = options.addition;
      for (let i = 2; i <= options.additionRepeatTimes ; i++) {
        optEnd += options.additionSeparator + options.addition;
      }
      let strEnd = str + optEnd;
      for (let i = 2; i <= options.repeatTimes; i++) {
        strEnd += options.separator + str + optEnd;
      }
     
      console.log(String(options.addition));
      return strEnd;
      }
    };
    