let words = new Array();

function dictionaryWords() {
   let newWord = document.getElementById("idWord").value;
   if (words.includes(newWord)) {
      idParagraph.textContent = "This word is in the dictionary";
   } else {
      words.push(document.getElementById("idWord").value);
      idParagraph.textContent = "";
   }
}
