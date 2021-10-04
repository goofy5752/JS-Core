//@ts-check
import { render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

import { logout as apiLogout } from "./api/api.js";
import { getUserData } from "./utility.js";
import { dashboard } from "./views/dashboard.js";
import { loginPage, registerPage } from "./views/auth.js";
import { detailsPage } from "./views/petDetails.js";
import { createPage } from "./views/addPet.js";
import { editPage } from "./views/editPet.js";
import { myPets } from "./views/myPets.js";

const main = document.getElementById("site-content");

document.getElementById("logoutBtn").addEventListener("click", logout);

page("/", decorateContext, dashboard);
page("/users/login", decorateContext, loginPage);
page("/users/register", decorateContext, registerPage);
page("/details/:id", decorateContext, detailsPage);
page("/edit/:id", decorateContext, editPage);
page("/create", decorateContext, createPage);
page("/myPets", decorateContext, myPets);

setUserNav();

page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    ctx.user = getUserData();

    next();
}

function setUserNav() {
    const user = getUserData();
    if (user) {
        document.getElementById("user").style.display = "";
        document.getElementById("guest").style.display = "none";
    } else {
        document.getElementById("user").style.display = "none";
        document.getElementById("guest").style.display = "";
    }
}

function logout() {
    apiLogout();
    setUserNav();
    page.redirect("/");
}