
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity)
{
  if (typeof sampleActivity !== 'string' || isNaN( parseFloat(sampleActivity)) || sampleActivity === '' || parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) > MODERN_ACTIVITY || typeof parseFloat(sampleActivity) !== 'number')
  {
    return false;
  } else {
    let age = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity) ) * HALF_LIFE_PERIOD / 0.693);
    return age;
  }
}
  
