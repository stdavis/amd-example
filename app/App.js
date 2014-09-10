define(['app/sum'], function (sum) {
    var a = document.getElementById('txtA');
    var b = document.getElementById('txtB');
    var btn = document.getElementById('btnSum');
    var result = document.getElementById('spanResult');

    btn.onclick = function () {
        result.innerHTML = sum(a.value, b.value);
    };
});
