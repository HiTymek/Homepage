{
    const bodyElement = document.body;

    const toggleBackground = () => {

        bodyElement.classList.toggle("js-darkMode");

    }

    const toggleButtonInnerText = () => {

        document.querySelector(".js-themeName").innerText = bodyElement.classList.contains("js-darkMode") ? "DARK" : "LIGHT";

    }

    const init = () => {

        const toggleBackgroundButton = document.querySelector(".js-toggleBackgroundButton");

        toggleBackgroundButton.addEventListener("click", () => {
            toggleButtonInnerText();
            toggleBackground();

        });

    }

    init()
}