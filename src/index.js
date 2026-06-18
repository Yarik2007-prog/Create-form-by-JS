"use strict";

const body = document.querySelector("body");

const form = document.createElement("form");
body.append(form);

// ===== Верхний блок =====

const divFormElem = document.createElement("div");
divFormElem.className = "form-elem";

const title = document.createElement("h1");
title.textContent = "CREATE AN ACCOUNT";

const description = document.createElement("p");
description.textContent =
    "We always keep your name and email address private.";

divFormElem.append(title, description);

// ===== Блок с инпутами =====

const divFormElemInfo = document.createElement("div");
divFormElemInfo.className = "form-elem-info";

const divFormElemInput = document.createElement("div");
divFormElemInput.className = "form-elem-input";

const divFormElemInputClone = document.createElement("div");
divFormElemInputClone.className = "form-elem-input";

// Левая колонка

const firstName = document.createElement("input");
firstName.type = "text";
firstName.placeholder = "First Name";

const displayName = document.createElement("input");
displayName.type = "text";
displayName.placeholder = "Display Name";

const password = document.createElement("input");
password.type = "password";
password.placeholder = "Password";

divFormElemInput.append(
    firstName,
    displayName,
    password
);

// Правая колонка

const lastName = document.createElement("input");
lastName.type = "text";
lastName.placeholder = "Last Name";

const email = document.createElement("input");
email.type = "email";
email.placeholder = "Email Address";

const passwordConfirm = document.createElement("input");
passwordConfirm.type = "password";
passwordConfirm.placeholder = "Password Confirmation";

divFormElemInputClone.append(
    lastName,
    email,
    passwordConfirm
);

divFormElemInfo.append(
    divFormElemInput,
    divFormElemInputClone
);

// ===== Радио №1 =====

const divFormElemRadio = document.createElement("div");
divFormElemRadio.className = "form-elem-radio";

const labelBuyer = document.createElement("label");
labelBuyer.htmlFor = "join-b";

const radioBuyer = document.createElement("input");
radioBuyer.type = "radio";
radioBuyer.name = "join";
radioBuyer.id = "join-b";

const buyerName = document.createElement("span");
buyerName.className = "name";
buyerName.textContent = "Join As a Buyer";

const buyerDescr = document.createElement("span");
buyerDescr.className = "descr";
buyerDescr.textContent =
    "I am looking for a Name, Logo or Tagline for my business, brand or product.";

labelBuyer.append(
    radioBuyer,
    buyerName,
    buyerDescr
);

divFormElemRadio.append(labelBuyer);

// ===== Радио №2 =====

const divFormElemRadioClone = document.createElement("div");
divFormElemRadioClone.className = "form-elem-radio";

const labelCreative = document.createElement("label");
labelCreative.htmlFor = "join-c";

const radioCreative = document.createElement("input");
radioCreative.type = "radio";
radioCreative.name = "join";
radioCreative.id = "join-c";

const creativeName = document.createElement("span");
creativeName.className = "name";
creativeName.textContent =
    "Join As a Creative or Marketplace Seller";

const creativeDescr = document.createElement("span");
creativeDescr.className = "descr";
creativeDescr.textContent =
    "I plan to submit name ideas, Logo designs or sell names in Domain marketplace.";

labelCreative.append(
    radioCreative,
    creativeName,
    creativeDescr
);

divFormElemRadioClone.append(labelCreative);

// ===== Чекбокс =====

const divFormElemCheck = document.createElement("div");
divFormElemCheck.className = "form-elem-check";

const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.name = "check-allow";
checkbox.id = "allow";

const checkboxLabel = document.createElement("label");
checkboxLabel.htmlFor = "allow";
checkboxLabel.textContent =
    "Allow Squadhelp to send marketing/promotional offers from time to time";

divFormElemCheck.append(
    checkbox,
    checkboxLabel
);

// ===== Кнопка =====

const button = document.createElement("input");
button.type = "submit";
button.value = "Create account";
button.className = "button";

// ===== Сборка формы =====

form.append(
    divFormElem,
    divFormElemInfo,
    divFormElemRadio,
    divFormElemRadioClone,
    divFormElemCheck,
    button
);