var returnWord = function(sentence, word) {
  var originalWords = sentence.split(/ /);
  var findWord = word
  var foundWord = []

  originalWords.forEach(function(originalWord) {
  if (originalWord === findWord){
    foundWord.push(originalWord)
  }
});
  return foundWord
};


$(document).ready(function() {
  $("form#sentence_form").submit(function(event) {
    var sentence = ($("input#sentence").val());
    var word = ($("input#word").val());
    var newWord = ($("input#newWord").val());
    var result = replaceWord(sentence, word, newWord);

    $(".result").text(result);
     event.preventDefault();

  });
});

// var replaceWord = function(sentence, word, newWord) {
//   var originalSentence = sentence;
//   var newSentence = originalSentence.replace(word, newWord);
//   return newSentence;
// };
