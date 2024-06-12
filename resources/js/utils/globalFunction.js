export const initGlobalFunction = (initApp) => {
    // dropdown
    initApp.config.globalProperties.toggleDropdown = function (targetId) {
        const target = document.getElementById(targetId);
        target.classList.toggle("hidden");
    };

    // sidebar
    initApp.config.globalProperties.clickMenu = function () {
        document.getElementById("sidebar").classList.toggle("w-[200px]");
        document.getElementById("sidebar").classList.toggle("w-[60px]");
        document.getElementById("menu-icon").classList.toggle("justify-end");
        document.getElementById("menu-icon").classList.toggle("justify-center");
        document.querySelector("main").classList.toggle("sm:ml-[200px]");
        document.querySelector("main").classList.toggle("sm:ml-[60px]");
        document.getElementById("top-bar").classList.toggle("sm:ml-[200px]");
        document.getElementById("top-bar").classList.toggle("sm:ml-[60px]");
    };
};
