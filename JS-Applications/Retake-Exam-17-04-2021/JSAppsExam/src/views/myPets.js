
import { html } from "../../node_modules/lit-html/lit-html.js";

import { getMyPets } from "../api/data.js";

const myPetsTemplate = (
    pets
) => html`
<section id="my-pets-page" class="my-pets">
    <h1>My Pets</h1>
   
   ${pets.length !== 0
        ? html`<ul class="my-pets-list">${pets.map(petTemplate)}</ul>`
        :
        html`<p class="no-pets">No pets in database!</p>`}
        </ul>
        </section>`

const petTemplate = (pet) => html`
    <li class="otherPet">
        <h3>Name: ${pet.name}</h3>
        <p>Type: ${pet.type}</p>
        <p class="img"><img src=${pet.imageUrl}></p>
            <a class="button" href="/details/${pet._id}">Details</a>
</li>
`
export async function myPets(ctx) {
    const pets = await getMyPets(ctx.user._id);

    ctx.render(myPetsTemplate(pets));
}


