document.addEventListener("DOMContentLoaded", () => {
    const dataTargets = document.querySelectorAll("button");
    console.log(dataTargets, "oke");

    dataTargets.forEach((target) => {
        target.addEventListener("click", (event) => {
            event.stopPropagation();
            const targetId = target.getAttribute("data-target");
            const dropdownContent = document.getElementById(targetId);
            dropdownContent.classList.toggle("hidden");

            // Close other dropdowns
            document
                .querySelectorAll(".dropdown-content")
                .forEach((content) => {
                    if (content.id !== targetId) {
                        content.classList.remove("hidden");
                    }
                });
        });
    });

    // Close dropdown if clicking outside of any target or dropdown content
    window.addEventListener("click", () => {
        document.querySelectorAll(".dropdown-content").forEach((content) => {
            content.classList.remove("hidden");
        });
    });
});
