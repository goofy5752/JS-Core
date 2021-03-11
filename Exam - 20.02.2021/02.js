// class ChristmasDinner {
//     constructor(budget){
//         if (budget < 0) {
//             throw new Error('The budget cannot be a negative number');
//         }
//         this.budget = budget;
//         this.dishes = [];
//         this.products = [];
//         this.guests = [];
//     }

//     shopping(product) {
//         if (product[1] > this.budget) {
//             throw new Error('Not enough money to buy this product');
//         }
//         this.products.push(product[0]);
//         this.budget = this.budget - product[1];
//         return `You have successfully bought ${product[0]}!`
//     }

//     recipes(recipe) {
//         const checkProducts = Object.values(recipe)[1];
//         for (let i = 0; i < checkProducts.length; i++) {
//             const el = checkProducts[i];
//             if (!this.products.includes(el)) {
//                 throw new Error('We do not have this product');
//             }
//         }
//         this.dishes.push(recipe);
//         return `${recipe.recipeName} has been successfully cooked!`
//     }

//     inviteGuests(name, dish) {
//         if (dish in this.dishes) {
//             throw new Error("We do not have this dish");
//         }
//         if (name in this.guests) {
//             throw new Error('This guest has already been invited')
//         }
//         this.guests[name] = dish;
//         return `You have successfully invited ${name}!`
//     }

//     showAttendance(){
//         return Object.entries(this.guests).map(g => `${g[0]} will eat ${g[1]}, which consists of ${this.products.join(', ')}`).join('\n')
//     }
// }

// let dinner = new ChristmasDinner(300);

// dinner.shopping(['Salt', 1]);
// dinner.shopping(['Beans', 3]);
// dinner.shopping(['Cabbage', 4]);
// dinner.shopping(['Rice', 2]);
// dinner.shopping(['Savory', 1]);
// dinner.shopping(['Peppers', 1]);
// dinner.shopping(['Fruits', 40]);
// dinner.shopping(['Honey', 10]);

// dinner.recipes({
//     recipeName: 'Oshav',
//     productsList: ['Fruits', 'Honey']
// });
// dinner.recipes({
//     recipeName: 'Folded cabbage leaves filled with rice',
//     productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
// });
// dinner.recipes({
//     recipeName: 'Peppers filled with beans',
//     productsList: ['Beans', 'Peppers', 'Salt']
// });

// dinner.inviteGuests('Ivan', 'Oshav');
// dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
// dinner.inviteGuests('Georgi', 'Peppers filled with beans');

// console.log(dinner.showAttendance());

class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`
        } else if (this._likes.length === 1) {
            const username = this._likes[0];
            return `${username} likes this story!`
        } else {
            const username = this._likes[0]
            return `${username} and ${this._likes.length - 1} others like this story!`;
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }
        if (this.creator === username) {
            throw new Error("You can't like your own story!")
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        }
        const indexOfDislike = this._likes.indexOf(username);
        this._likes.splice(indexOfDislike, 1);
        return `${username} disliked ${this.title}`
    }

    comment(username, content, id) {
        const isCommentExist = this._comments.find(comment => comment.id == id);
        if (!id || !isCommentExist) {
            const comment = {
                id: this._comments.length + 1,
                username: username,
                content: content,
                replies: []
            }
            this._comments.push(comment);
            return `${username} commented on ${this.title}`;
        }
        if (isCommentExist) {
            const indexOfComment = this._comments.findIndex(comment => comment.id == id);
            let currentComment = this._comments[indexOfComment];

            currentComment = {
                ...currentComment,
                replies: [...currentComment.replies, { id: `${currentComment.id}.${currentComment.replies.length + 1}`, username: username, content: content }]
            }
            this._comments[indexOfComment] = currentComment;
            return "You replied successfully";
        }
    }

    //     Title: My Story
    // Creator: Anny
    // Likes: 0
    // Comments:
    // -- 2. Ammy: New Content
    // -- 3. Jessy: Nice :)
    // -- 1. Sammy: Some Content
    // --- 1.2. SAmmy: Reply@
    // --- 1.1. Zane: Reply


    toString(sortingType) {
        let result = `Title: ${this.title}` + '\n'
        result += `Creator: ${this.creator}` + '\n';
        result += `Likes: ${this._likes.length}` + `\n`;
        result += `Comments:`
        if (sortingType === "asc") {
            let comments = this._comments.sort((a, b) => (a.id > b.id) ? 1 : -1)
            comments.map(comment => {
                result += "\n" + `-- ${comment.id}. ${comment.username}: ${comment.content}`
                comment.replies.map(reply => {
                    result += "\n" + `--- ${reply.id}. ${reply.username}: ${reply.content}`
                })
            })
            return result
        } else if (sortingType === "desc") {
            let comments = this._comments.sort((a, b) => (a.id < b.id) ? 1 : -1)
            comments.map(comment => {
                result += "\n" + `-- ${comment.id}. ${comment.username}: ${comment.content}`
                comment.replies.map(reply => {
                    result += "\n" + `--- ${reply.id}. ${reply.username}: ${reply.content}`
                })
            })
            return result
        } else if (sortingType === "username") {
            let comments = [...this._comments];
            comments.forEach(comment => {
                let replies = [...comment.replies] || [];
                replies.sort((a, b) => (a.username > b.username) ? 1 : -1)
                comment.replies = replies;
            })
            comments.sort((a, b) => (a.username > b.username) ? 1 : -1)
            comments.map(comment => {
                result += "\n" + `-- ${comment.id}. ${comment.username}: ${comment.content}`
                comment.replies.map(reply => {
                    result += "\n" + `--- ${reply.id}. ${reply.username}: ${reply.content}`
                })
            })
            return result;
        }
    }
}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");