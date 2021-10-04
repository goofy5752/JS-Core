import { html } from "../../node_modules/lit-html/lit-html.js";

import { login, register } from "../api/data.js";

const loginTemplate = (onSubmit) => html`
<section id="login-page" class="login">
    <form id="login-form" @submit=${onSubmit}>
        <fieldset>
            <legend>Login Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Login">
        </fieldset>
    </form>
</section>`;

export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));
  
    async function onSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const email = formData.get("email").trim();
      const password = formData.get("password").trim();
  
      await login(email, password);
      event.target.reset(); 
      ctx.setUserNav();
      ctx.page.redirect("/");
    }
  }


const registerTemplate = (onSubmit) => html`<section id="register-page" class="register">
<form id="register-form" @submit=${onSubmit}>
    <fieldset>
        <legend>Register Form</legend>
        <p class="field">
            <label for="email">Email</label>
            <span class="input">
                <input type="text" name="email" id="email" placeholder="Email">
            </span>
        </p>
        <p class="field">
            <label for="password">Password</label>
            <span class="input">
                <input type="password" name="password" id="password" placeholder="Password">
            </span>
        </p>
        <p class="field">
            <label for="repeat-pass">Repeat Password</label>
            <span class="input">
                <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
            </span>
        </p>
        <input class="button submit" type="submit" value="Register">
    </fieldset>
</form>
</section>`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));
  
    async function onSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const email = formData.get("email").trim();
      const password = formData.get("password").trim();
      const repeatPass = formData.get("confirm-pass").trim();
  
      if (!email || !password) {
        return alert("All fields are required!");
      }
  
      if (password != repeatPass) {
        return alert("Passwords don't match!");
      }
  
      await register(email, password);
      event.target.reset(); 
      ctx.setUserNav()
      ctx.page.redirect("/");
    }
  }
