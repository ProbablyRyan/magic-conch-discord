const type = require('./typeCheckers');

module.exports = text => type.isYesOrNo(text) ? "YES OR NO" : notYesOrNo(text);

const notYesOrNo = text => type.isEitherOr(text) ? "EITHER OR" : notEitherOr(text);

const notEitherOr = text => type.isWhatDo(text) ? "WHAT DO" : "UNKNOWN";
