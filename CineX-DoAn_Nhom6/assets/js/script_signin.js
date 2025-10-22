document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById("popup");
  const popupSuccess = document.getElementById("popupSuccess");
  const openBtn = document.getElementById("signin_signup");
  const closeBtn = document.getElementById("closePopup");
  const closeBtn2 = document.getElementById("closePopup2");

  const signInForm = document.getElementById("sign_in");
  const signUpForm = document.getElementById("sign_up");

  const toSignIn = document.getElementById("toSignIn");
  const toSignUp = document.getElementById("toSignUp");
  const tabSignIn = document.getElementById("tabSignIn");
  const tabSignUp = document.getElementById("tabSignUp");

  const show = el => el.classList.add('show');
  const hide = el => el.classList.remove('show');

  // mở popup
  openBtn.addEventListener("click", () => show(popup));
  // đóng popup
  closeBtn.addEventListener("click", () => hide(popup));
  popup.addEventListener("click", e => { if (e.target === popup) hide(popup); });

  // chuyển tab
  tabSignUp.addEventListener("click", () => {
    signUpForm.classList.add("active");
    signInForm.classList.remove("active");
    tabSignUp.classList.add("active");
    tabSignIn.classList.remove("active");
  });
  tabSignIn.addEventListener("click", () => {
    signInForm.classList.add("active");
    signUpForm.classList.remove("active");
    tabSignIn.classList.add("active");
    tabSignUp.classList.remove("active");
  });

  toSignIn.addEventListener("click", e => { e.preventDefault(); tabSignIn.click(); });
  toSignUp.addEventListener("click", e => { e.preventDefault(); tabSignUp.click(); });

  // toggle password
  window.toggle_password = span => {
    const input = span.previousElementSibling;
    if (input.type === "password") { input.type = "text"; span.textContent = "Ẩn"; }
    else { input.type = "password"; span.textContent = "Hiện"; }
  };

  // submit giả lập
  signInForm.addEventListener("submit", e => {
    e.preventDefault(); hide(popup); show(popupSuccess);
  });
  signUpForm.addEventListener("submit", e => {
    e.preventDefault(); hide(popup); show(popupSuccess);
  });

  // đóng popup success
  closeBtn2.addEventListener("click", () => hide(popupSuccess));
  popupSuccess.addEventListener("click", e => { if (e.target === popupSuccess) hide(popupSuccess); });
});