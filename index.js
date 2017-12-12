// 言語設定
var speech = new webkitSpeechRecognition();
speech.lang = 'ja';

obj = {test:'aaa'}

// エレメント設定
var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    speech.start();
})

speech.addEventListener('result', function (e) {
    document.querySelector('.content').innerHTML = e.results.item(0).item(0).transcript;
});
