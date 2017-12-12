// 言語設定
const speech = new webkitSpeechRecognition();

speech.lang = 'ja';

obj = { test: 'aaa' }

// エレメント設定
const BTN = document.getElementById('btn');
const CONTENT = document.querySelector('.content');
const JSON_OUTPUT = document.querySelector('.jsonOutput');

BTN.addEventListener('click', function () {
    speech.start();
})

speech.addEventListener('result', function (e) {
    const retrunText = e.results.item(0).item(0).transcript;
    CONTENT.innerHTML = retrunText

    var synthes = new SpeechSynthesisUtterance(retrunText);
    synthes.lang = "ja-JP"
    speechSynthesis.speak(synthes);

    kuromoji.builder({ dicPath: './kuromoji.js/dict/' }).build(function (err, tokenizer) {
        // tokenizer is ready
        var path = tokenizer.tokenize(retrunText);
        JSON_OUTPUT.innerHTML = JSON.stringify(path);
        
    });

});
