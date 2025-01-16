const modalFunc = () => {
    const modal = document.querySelector(".modal__overlay");
    const cartBtns = document.querySelectorAll(".button-modal");
    const notificationsBtn = document.querySelector(".notifications");
    const formAuth = document.querySelector(".auth-form");
    const title = document.querySelector(".user-modal__header--title");
    const notificationsMessage = document.querySelector(".message");

    const openModal = () => {
        modal.classList.add("open");
    };

    const closeModal = () => {
        modal.classList.remove("open");
        title.innerText = "Авторизация";
        notificationsMessage.style.display = "none";
        formAuth.style.display = "flex";
    };

    cartBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            openModal();
        });
    });

    modal.addEventListener("click", (event) => {
        if (
            event.target.classList.contains("modal__overlay") ||
            event.target.closest(".user-modal__header--close")
        ) {
            closeModal();
        }
    });

    notificationsBtn.addEventListener("click", () => {
        openModal();
        formAuth.style.display = "none";
        notificationsMessage.style.display = "flex";
        title.innerText = "Уведомления";
        notificationsMessage.innerText = "Уведомлений нет";

        notificationsMessage.style.padding = "20px";
        notificationsMessage.style.backgroundColor = "#f9f9f9";
        notificationsMessage.style.border = "1px solid #ddd";
        notificationsMessage.style.borderRadius = "10px";
        notificationsMessage.style.fontSize = "16px";
        notificationsMessage.style.color = "#555";
        notificationsMessage.style.textAlign = "center";
        notificationsMessage.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    });
};

modalFunc();
