const menubtn = document.querySelector(".menu");

      menubtn.addEventListener("click", () => {
        $(".sideanchorwrapper").toggleClass("active");
      });


const buttons = document.querySelectorAll("[data-namex]");
const modalx = document.querySelectorAll(".contentpolicybox")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    modalx.forEach(mod => {
      mod.classList.remove("show")
      $(".sideanchorwrapper").removeClass("active");
    })
    const modalId = button.dataset.namex
    const modal = document.getElementById(modalId)
    console.log(modal);
    modal.classList.add("show")

  })

})
