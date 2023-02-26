if (document.querySelector(".QandA")) {
  const QandAArea = document.getElementById("QandAArea"),
    QandAAreaOuter = document.getElementById("QandAAreaOuter"),
    QandAOwn = document.getElementById("QandAOwn"),
    QandAPeople = document.getElementById("QandAPeople"),
    QandASend = document.getElementById("QandASend"),
    QandAAnon = document.getElementById("QandAAnon"),
    QandASent = document.getElementById("QandASent"),
    QandAAnother = document.getElementById("QandAAnother");

  QandAArea.addEventListener("focus", () => {
    QandAOwn.classList.add("hide");
    QandAOwn.classList.remove("show");
    QandAPeople.classList.add("hide");
    QandAPeople.classList.remove("show");
  });

  QandAArea.addEventListener("blur", () => {
    QandAOwn.classList.remove("hide");
    QandAOwn.classList.add("show");
    QandAPeople.classList.remove("hide");
    QandAPeople.classList.add("show");

    if (QandAArea.value !== "") {
      QandASend.classList.remove("hide");
      QandASend.classList.add("show");

      QandAOwn.classList.add("hide");
      QandAOwn.classList.remove("show");
      QandAPeople.classList.add("hide");
      QandAPeople.classList.remove("show");
    }
  });

  QandAArea.addEventListener("input", () => {
    if (QandAArea.value == "" || QandAArea.value == null) {
      QandASend.classList.add("hide");
      QandASend.classList.remove("show");
    } else {
      QandASend.classList.remove("hide");
      QandASend.classList.add("show");

      QandAOwn.classList.add("hide");
      QandAOwn.classList.remove("show");

      QandAPeople.classList.add("hide");
      QandAPeople.classList.remove("show");
    }
  });

  QandASend.addEventListener("click", (e) => {
    e.preventDefault();
    QandAAreaOuter.classList.add("hide");
    QandAAreaOuter.classList.remove("show");

    QandASent.classList.remove("hide");
    QandASent.classList.add("show");

    QandAAnon.classList.add("hide");
    QandAAnon.classList.remove("show");

    QandASend.classList.add("hide");
    QandASend.classList.remove("show");

    QandAOwn.classList.remove("hide");
    QandAOwn.classList.add("show");

    QandAPeople.classList.remove("hide");
    QandAPeople.classList.add("show");
  });
}

if (document.querySelector(".faq__list")) {
  const accs = document.querySelectorAll(".faq__list-item");
  const contents = document.querySelectorAll(".faq__list-content");

  accs.forEach((acc) => {
    acc.addEventListener("click", () => {
      let content = acc.querySelector(".faq__list-content");
      if (acc.classList.contains("active")) {
        accs.forEach((acc) => acc.classList.remove("active"));
        contents.forEach((c) => c.style.maxHeight = null);
      } else {
        accs.forEach((acc) => acc.classList.remove("active"));
        contents.forEach((c) => c.style.maxHeight = null);
        acc.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}
