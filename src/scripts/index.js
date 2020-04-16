import '../styles/index.scss';

document.addEventListener("DOMContentLoaded", function (event) {
    const imgContainer = document.querySelector('#imgContainer');

    const img = new Image();
    img.src = './assets/img/1.jpg';
    imgContainer.appendChild(img);


    setTimeout(() => {
        imgContainer.style.opacity = 1;
    }, 500);

    const dd = document.querySelector('.container .dd>div:first-child');
    const hh = document.querySelector('.container .hh>div:first-child');
    const mm = document.querySelector('.container .mm>div:first-child');
    const ss = document.querySelector('.container .ss>div:first-child');
    const ms = document.querySelector('.container .ms>div:first-child');
    const ddLine = document.querySelector('.container .line-dd');
    const hhLine = document.querySelector('.container .line-hh');
    const mmLine = document.querySelector('.container .line-mm');
    const ssLine = document.querySelector('.container .line-ss');
    const msLine = document.querySelector('.container .line-ms');
    //console.log(dd);

    const dateStart = new Date(2020, 2, 12).getTime();
    setInterval(() => {
        const dif = (new Date().getTime() - dateStart);
        // console.log(secondsToDhms(dif));
        const timeLeft = secondsToDhms(dif);
        dd.innerHTML = timeLeft.dd.toString();


        hh.innerHTML = timeLeft.hh.toString();

        ddLine.style.width = Math.round(timeLeft.hh * 100 / 24) + '%';

        mm.innerHTML = timeLeft.mm.toString();

        hhLine.style.width = Math.round(timeLeft.mm * 100 / 60) + '%';

        ss.innerHTML = timeLeft.ss.toString();

        mmLine.style.width = timeLeft.ss * 100 / 60 + '%';
        ms.innerHTML = timeLeft.ms.toString();
        ssLine.style.width = timeLeft.ms * 100 / 1000 + '%';
        msLine.style.opacity = (timeLeft.ms % 2 ? 0 : 1).toString();
    }, 40);
});

function secondsToDhms(ms) {
    ms = Number(ms);
    var dd = Math.floor(ms / 1000 / (3600 * 24)) + 1;
    var hh = Math.floor(ms / 1000 % (3600 * 24) / 3600) + 1;
    var mm = Math.floor(ms / 1000 % 3600 / 60);
    var ss = Math.floor(ms / 1000 % 60);
    var ms = Math.floor(ms % 1000);

    return {
        dd,
        hh,
        mm,
        ss,
        ms
    };
}
