"use strict";

const body = document.querySelector("body");
const form = document.createElement("form");
const divFormElem = document.createElement("div");
const divFormElemInfo = document.createElement("div");
const divFormElemInput = document.createElement("div");
const divFormElemRadio = document.createElement("div");
const divFormElemCheck = document.createElement("div");
const divFormElemRadioClone = divFormElemRadio.cloneNode();
const divFormElemInputClone = divFormElemInput.cloneNode();
const button = document.createElement("input");

divFormElem.setAttribute("class", "form-elem");
divFormElemInfo.setAttribute("class", "form-elem-info");
divFormElemInput.setAttribute("class", "form-elem-input");
divFormElemInputClone.setAttribute("class", "form-elem-input");
divFormElemRadio.setAttribute("class", "form-elem-radio");
divFormElemRadioClone.setAttribute("class", "form-elem-radio");
divFormElemCheck.setAttribute("class", "form-elem-check");
button.setAttribute("type", "submit")
button.setAttribute("value", "Create account")
button.setAttribute("class", "button")


body.append(form);
form.append(divFormElem);
form.append(divFormElemInfo);
form.append(divFormElemInput);
form.append(divFormElemRadio);
form.append(divFormElemRadioClone);
form.append(divFormElemCheck);
form.append(button);
divFormElemInfo.append(divFormElemInput);
divFormElemInfo.append(divFormElemInputClone);

divFormElem.innerHTML = `
    <h1>CREATE AN ACCOUNT</h1>
    <p>We always keep your name and email address private.</p>
    `;

divFormElemInput.innerHTML = `<input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Display Name" />
                    <input type="password" placeholder="Password" />`;

divFormElemInputClone.innerHTML = `<input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Email Address" />
                    <input
                        type="password"
                        placeholder="Password Confrimation"
                    />`;

divFormElemRadio.innerHTML = ` <label for="join-b">
                    <input type="radio" name="join" id="join-b" />
                    <span class="name">Join As a Buyer</span>
                    <span class="descr">
                        I am looking for a Name, Logo or Tagline for my
                        busines, brand or product.
                    </span>
                </label>`;

divFormElemRadioClone.innerHTML = `<label for="join-c">
                    <input type="radio" name="join" id="join-c" />
                    <span class="name">Join As a Creative or Marketplace Seller</span>
                    <span class="descr">
                        I plan to submit name ideas, Logo designs or sell names in Domain marketplace.
                    </span>
                </label>`;

divFormElemCheck.innerHTML = ` <input type="checkbox" name="chek-allow" id="allow">
                <label for="allow">Allow Squadhelp to send marketing/promotional offers from time to time</label>`;
