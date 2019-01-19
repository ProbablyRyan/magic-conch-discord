// ugly and questionably effective RegExp warning

module.exports = {
  isYesOrNo: q => {
    return /^(?:will|do|did|am|are|were|could|can|should|have|has|may|might|must|ought|shall).*/gim.test(q);
  },

  isEitherOr: q => {
    return /(?:^.*\bor\b.*|^which\b.*)/gim.test(q);
  },

  isWhatDo: q => {
    return /^what (?:will|do|did|am|are|were|could|can|should|have|has|may|might|must|ought|shall).*/gim.test(q);
  }
}
