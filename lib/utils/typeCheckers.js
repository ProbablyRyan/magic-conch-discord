// ugly and questionably effective RegExp's ahead'

module.exports = {
  isYesOrNo: q => {
    return /^<.*>\W*(?:will|do|did|am|are|were|could|can|should|have|has|may|might|must|ought|shall|was).*/gim.test(q);
  },

  isEitherOr: q => {
    return /(?:^.*\bor\b.*|^<.*>\W*which\b.*)/gim.test(q);
  },

  isWhatDo: q => {
    return /^<.*>\W*what (?:will|do|did|am|are|were|could|can|should|have|has|may|might|must|ought|shall).*/gim.test(q);
  }
}
