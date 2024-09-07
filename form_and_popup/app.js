"use strict";

const form = document.getElementById("add-form");
const popup = document.getElementById("add_popup");
const submitButton = document.getElementById("submit-button");
const inputs = document.querySelectorAll(".valid_checked");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");
const popupDateTime = document.getElementById("popupDateTime");
const popupLink = document.getElementById("popupLink");
const copyButton = document.getElementById("copyButton");

document.addEventListener("DOMContentLoaded", () => {
  submitButton.addEventListener("click", handleFormSubmission);

  inputs.forEach((input) => {
    input.addEventListener("input", handleInputChange);
    input.addEventListener("blur", handleInputValidation);
    input.addEventListener("change", handleInputValidation);
  });
});

function handleFormSubmission(event) {
  event.preventDefault();

  if (isFormValid(form)) {
    displayPopup();
    addFormDataToPopup();
  }
}

function isFormValid(form) {
  let isValid = true;

  form.querySelectorAll("input, textarea").forEach((input) => {
    const trimmedValue = input.value.trim();
    removeErrorMessage(input);

    if (!trimmedValue) {
      displayErrorMessage(input, "Поле не заполнено");
      isValid = false;
    }
  });

  return isValid;
}

function displayErrorMessage(input, message) {
  input.classList.add("error");
  const errorLabel =
    input.parentNode.querySelector(".error-label") ||
    document.createElement("label");
  errorLabel.classList.add("error-label");
  errorLabel.textContent = message;
  input.parentNode.append(errorLabel);
}

function removeErrorMessage(input) {
  const errorLabel = input.parentNode.querySelector(".error-label");
  if (errorLabel) {
    errorLabel.remove();
    input.parentNode.classList.remove("error");
  }
}

function handleInputChange(event) {
  removeErrorMessage(event.target);
}

function handleInputValidation(event) {
  const input = event.target;
  const isEmpty = input.value.trim() === "";

  input.classList.toggle("invalid", isEmpty);
  isEmpty
    ? displayErrorMessage(input, "Поле не заполнено")
    : removeErrorMessage(input);
}

function displayPopup() {
  popup.classList.toggle("pop-up__hidden");
}

function addFormDataToPopup() {
  const name = document.getElementById("title").value;
  const desc = document.getElementById("description").value;
  const when = document.getElementById("dateTime").value;
  const alsoLink = document.getElementById("link").value;
  const dateTime = prepareDateTimeForDisplay(when);
  const link = generateGoogleCalendarEventLink(name, desc, alsoLink, dateTime);

  addPopupContent(name, desc, dateTime, link);
  copyButton.addEventListener("click", () => copyTextToClipboard(link));
}

function prepareDateTimeForDisplay(when) {
  const dateTime = new Date(when);
  dateTime.setHours(dateTime.getHours() + 1);
  return dateTime;
}

function generateGoogleCalendarEventLink(name, desc, alsoLink, dateTime) {
  const rfcDates = convertDateToRFC5545Format(dateTime);
  return createGoogleCalendarEventUrl(
    name,
    desc,
    alsoLink,
    `${rfcDates}/${rfcDates}`
  );
}

function createGoogleCalendarEventUrl(name, desc, alsoLink, dates) {
  return `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent(
    name
  )}&dates=${dates}&details=${encodeURIComponent(
    desc
  )}&location=${encodeURIComponent(alsoLink)}`;
}

function addPopupContent(name, desc, dateTime, link) {
  popupTitle.innerText = name;
  popupDescription.innerText = desc;
  popupDateTime.innerText = formatDateForDisplay(dateTime);
  popupLink.innerText = "Ваша ссылка";
  popupLink.href = link;
  popupLink.target = "_blank";
}

function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text);
}

function formatDateForDisplay(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

function convertDateToRFC5545Format(date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");
  return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
}
