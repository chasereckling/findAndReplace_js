var findAndReplace = function(sentence, originalWord, replacementWord) {
  var originalSentence = sentence.split(" ");
  var newSentence = [];

  for (var i = 0; i < originalSentence.length; i++){
    if (originalSentence[i] === originalWord){
      newSentence.push(replacementWord);
    } else {
      newSentence.push(originalSentence[i]);
    }
  };
    return newSentence.join(" ");
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
