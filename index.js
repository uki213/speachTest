// 言語設定
var speech = new webkitSpeechRecognition();
speech.lang = "ja";

// エレメント設定
var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    speech.start();
})

speech.addEventListener('result', function (e) {
    document.querySelector('.content').innerHTML = e;
});

