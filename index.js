// 言語設定
const speech = new webkitSpeechRecognition();
speech.lang = 'ja';

obj = { test: 'aaa' }

// エレメント設定
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    speech.start();
})

speech.addEventListener('result', function (e) {
    const retrunText = e.results.item(0).item(0).transcript;
    document.querySelector('.content').innerHTML = retrunText

    var synthes = new SpeechSynthesisUtterance(retrunText);
    synthes.lang = "ja-JP"
    speechSynthesis.speak(synthes);

    alert(retrunText);

});
