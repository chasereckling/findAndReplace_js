var findAndReplace = function(sentence, originalWord, replacementWord) {
  var originalSentence = sentence.split(" ");
  var findWord = originalWord
  var newSentence = []

  for (var i = 0; i < originalSentence.length; i++){
    if (originalSentence[i] != findWord){
    newSentence.push(originalSentence[i])
    } else {
    newSentence.push(replacementWord)
    }
  };
    return newSentence.join(" ")
};

$(document).ready(function() {
  $("form#sentence_form").submit(function(event) {
    var sentence = ($("input#sentence").val());
    var originalWord = ($("input#originalWord").val());
    var replacementWord = ($("input#replacementWord").val());
    var result = findAndReplace(sentence, originalWord, replacementWord);

    $(".result").text(result);
     event.preventDefault();

  });
});

// var replaceWord = function(sentence, word, newWord) {
//   var originalSentence = sentence;
//   var newSentence = originalSentence.replace(word, newWord);
//   return newSentence;
// };

// var returnedWord = function(sentence, word, newWord) {
//   var originalWord = sentence.split(/ /);
//   var findWord = word
//   var replacementWord = newWord
//   var newSentence = []
//
//   for (var i = 0; i < originalWord.length; i++){
//     if (originalWord[i] != findWord){
//     newSentence.push(originalWord[i])
//     } else {
//     newSentence.push(replacementWord)
//     }
//   };
//   return newSentence.join(" ")
// };

// var returnedWord = function(sentence, word, newWord) {
//   var originalSentence = sentence.toLowerCase().split(/ /);
//   var findWord = word
//   var replacementWord = newWord
//
//   for (var i = 0; i < originalSentence.length; i++){
//     if (originalSentence[i] === findWord){
//     originalSentence[i] = newWord
//     }
//     sentence = originalSentence.join(" ")
//   };
//   return sentence
// };
