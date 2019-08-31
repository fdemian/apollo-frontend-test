export const getFormattedTime = (timeSecs) => {  
    if(timeSecs < 60)
      return "0:" + formatDigits(timeSecs);

    if(timeSecs > 60){
      const durationMins = Math.trunc((timeSecs/60));
      const durationSecs = Math.trunc(timeSecs-(60*durationMins));

      return durationMins + ":" + formatDigits(durationSecs);
    }
}

const formatDigits = (digit) => {
    if(digit >= 10)
      return digit.toString();

    return "0" + digit;
}
