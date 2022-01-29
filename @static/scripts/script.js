const SERVICE_ID = "service_dyrehwq";
const TEMPLATE_ID = "template_u2qacci";
const USER_ID = "user_02eyyE8jmRmh9YahKnlWp";
// const SERVICE_ID = "service_84x5u2b";
// const TEMPLATE_ID = "template_av6h238";
// const USER_ID = "user_UkTuhFWjCTbCevESyJRCJ";

const id_type = document.querySelector("#id-type");
const id_form = document.querySelector("#id-form");
const js_change = document.querySelectorAll(".js-change");
const js_required = document.querySelectorAll(".js-required");

const change_target = () => {
  js_change.forEach((v) => {
    v.classList.toggle("is-none");
  });
  js_required.forEach((v) => {
    v.toggleAttribute("required");
  });
};

const send_mail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(SERVICE_ID, TEMPLATE_ID, "#id-form", USER_ID)
    .then(
      (response) => {
        console.log("SUCCESS.", response.status, response.text);
      },
      (error) => {
        console.log("FAILED.", error);
      }
    )
    .finally(() => {
      location.href = "thanks/";
    });
};

id_type.addEventListener("change", change_target);
id_form.addEventListener("submit", send_mail);
