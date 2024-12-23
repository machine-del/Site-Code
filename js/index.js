const modalFunc = () => {
    const modal = document.querySelector(".modal__overlay");
    const cartBtn = document.querySelector("#button-modal");

    const openModal = () => {
        modal.classList.add("open");
    };

    const closeModal = () => {
        modal.classList.remove("open");
    };

    cartBtn.addEventListener("click", () => {
        openModal();
    });

    modal.addEventListener("click", (event) => {
        if (
            event.target.classList.contains("modal__overlay") ||
            event.target.closest(".user-modal__header--close")
        ) {
            closeModal();
        }
    });
};

modalFunc();