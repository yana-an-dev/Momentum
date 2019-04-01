const clockContainer =  document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    //new Date을 여기서는 객체라고 생각. 나중에 유튜브나 리액트에서 배움.
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${
        minutes < 10 ? `0${minutes}`: minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
}
function init() {
        getTime();
        setInterval(getTime, 1000);
    }


init();