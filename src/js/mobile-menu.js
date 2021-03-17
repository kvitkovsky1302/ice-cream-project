(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const mobileBtnClose = document.querySelector("[data-menu-close]");
    const mobileLi1 = document.querySelector("[data-li1]");
    const mobileLi2 = document.querySelector("[data-li2]");
    const mobileLi3 = document.querySelector("[data-li3]");
    const mobileLi4 = document.querySelector("[data-li4]");
  const burger1 = document.querySelector(".burger-container span");
  
  // mobileMenuRef.addEventListener("mouseout", () => {
  //   mobileMenuRef.classList.toggle("is-open");
  //     burger1.classList.toggle('active');
  // })
  
  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    })

  mobileBtnClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle("is-open");
      burger1.classList.toggle('active');
    });
  
  mobileLi1.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    burger1.classList.toggle('active');
  })

  mobileLi2.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    burger1.classList.toggle('active');
  })

  mobileLi3.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    burger1.classList.toggle('active');
  })

  mobileLi4.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    burger1.classList.toggle('active');
    })
})()