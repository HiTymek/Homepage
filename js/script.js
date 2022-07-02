{
    const toggleBackground = (bodyElement) => {
        bodyElement.classList.toggle("js-darkMode");
    }

    const toggleButtonInnerText = (bodyElement) => {
        document.querySelector(".js-themeName").innerText = bodyElement.classList.contains("js-darkMode") ? "DARK" : "LIGHT";
    }

    const onToggleButtonClick = () => {
        const bodyElement = document.body;

        toggleButtonInnerText(bodyElement);
        toggleBackground(bodyElement);
    }

    const init = () => {
        const toggleBackgroundButton = document.querySelector(".js-toggleBackgroundButton");

        toggleBackgroundButton.addEventListener("click", onToggleButtonClick);
    }

    init()
}