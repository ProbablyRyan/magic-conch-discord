const responseMap = require('./utils/responseMap');
const classifyQuestion = require('./utils/classifyQuestion');

module.exports = message => {
  const questionType = classifyQuestion(message);
  const responses = responseMap.filter(r => r.tags.includes(questionType));

  if (responses.length === 1) {
    return responses[0].response;
  } else {
    const i = Math.floor(Math.random() * responses.length);
    return responses[i].response;
  }
}
