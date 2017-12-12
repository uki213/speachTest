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
    document.querySelector('.content').innerHTML = JSON.stringify(e); //e.results[0][0].transcript;
    alert(e.innerText)
});
