const type = require('./typeCheckers');

module.exports = text => {
  if (type.isEitherOr(text)) {
    return "EITHER OR";
  } else if (type.isYesOrNo(text)) {
    return "YES OR NO";
  } else if (type.isWhatDo(text)) {
    return "WHAT DO";
  } else {
    return "UNKNOWN";
  }
}
