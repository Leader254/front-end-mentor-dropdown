const menu = document.querySelector('.humburger');
const header = document.querySelector('.navbar');
const featuresBtn = document.querySelector('.features');
const hiddenFeaturesBtn = document.querySelector(".hidden-features");
const companyBtn = document.querySelector('.company');
const hiddenCompanyBtn = document.querySelector('.hidden-company');

menu.addEventListener("click", () =>{
    header.classList.toggle("active");
});
featuresBtn.addEventListener("click", function () {
  hiddenFeaturesBtn.classList.toggle("active");
});
companyBtn.addEventListener("click", function () {
  hiddenCompanyBtn.classList.toggle("active");
});
window.addEventListener("click", (e) => {
  if (
    hiddenFeaturesBtn.classList.contains("active") &&
    e.target.innerText !== "Features"
  ) {
    hiddenFeaturesBtn.classList.remove("active");
  }
  if (
    hiddenCompanyBtn.classList.contains("active") &&
    e.target.innerText !== "Company"
  ) {
    hiddenCompanyBtn.classList.remove("active");
  }
});