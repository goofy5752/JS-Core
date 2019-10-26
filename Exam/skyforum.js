class Forum {
    constructor() {
        this._users = [];
        this._questions = [];
        this._loginUsers = [];
        this._isLogged = false;
        this._isLogOut = false;
        this._id = 1;
        this._isQuestionSuccess = false;
        this._isAnswerSuccess = false;
        this._isQuestionId = false;
    }

    register(username, password, repeatPassword, email) {
        if (!username, !password, !repeatPassword, !email) {
            throw (Error, 'Input can not be empty')
        } else if (password != repeatPassword) {
            throw (Error, 'Passwords do not match')
        }
        if (this._users.length != 0) {
            for (let i = 0; i < this._users.length; i++) {
                if (this._users[i].username == username || this._users[i].email == email) {
                    throw (Error, 'This user already exists!')
                }
            }
        }
        const userObj = {
            'username': username,
            'email': email,
            'password': password,
            'id': this._id
        }
        this._users.push(userObj);
    }

    login(username, password) {
        for (let i = 0; i < this._users.length; i++) {
            const element = this._users[i];
            if (element.username === username && element.password === password) {
                console.log('Hello! You have logged in successfully');
                this._isLogged = true;
                this._loginUsers.push(element);
                return;
            }
        }
        this._isLogged = false;
        if (!this._isLogged) {
            throw (Error, 'There is no such user')
        }
    }

    logout(username, password) {
        for (let i = 0; i < this._loginUsers.length; i++) {
            const element = this._loginUsers[i];
            if (element.username === username) {
                this._loginUsers.splice(i, 1)
                console.log('You have logged out successfully');
                this._isLogOut = true;
                break;
            }
        }

        if (!this._isLogOut) {
            this._isLogOut = false;
            throw (Error, 'There is no such user');
        }
    }

    postQuestion(username, question) {
        if (question === '') {
            throw (Error, 'Invalid question')
        }
        for (let i = 0; i < this._loginUsers.length; i++) {
            const element = this._loginUsers[i];
            if (element.username === username) {
                var questionObj = {
                    'id': this._id,
                    'question': question,
                    'username': username,
                    'answers': []
                }

                this._questions.push(questionObj);
                this._id++;
                this._isQuestionSuccess = true;
                console.log('Your question has been posted successfully');
                break;
            }
        }
        if (!this._isQuestionSuccess) {
            this._isQuestionSuccess = false;
            throw (Error, 'You should be logged in to post questions');
        }
    }

    postAnswer(username, questionId, answer) {
        if (answer == '') {
            throw (Error, 'Invalid answer')
        }
        for (let i = 0; i < this._loginUsers.length; i++) {
            const element = this._loginUsers[i];
            if (element.id == questionId) {
                this._isQuestionId = true;
            }
        }
        if (!this._isQuestionId) {
            this._isQuestionId = false;
            throw (Error, 'There is no such question');
        }
        for (let i = 0; i < this._loginUsers.length; i++) {
            const element = this._loginUsers[i];
            if (element.username == username) {
                this._isAnswerSuccess = true;
                console.log('Your answer has been posted successfully');
                for (let i = 0; i < this._questions.length; i++) {
                    const answerObj = {
                        'userAnswer': username,
                        'answer': answer
                    }
                    const q = this._questions[i];
                    if (q.id === questionId) {
                        this._questions[i].answers.push(answerObj);
                    }
                }
                break;
            }
        }
        if (!this._isAnswerSuccess) {
            this._isAnswerSuccess = false;
            throw (Error, 'You should be logged in to post answers');
        }
    }

    showQuestions() {
        let a = '';
        for (let i = 0; i < this._questions.length; i++) {
            const element = this._questions[i];
            a += `Question ${element.id} by ${element.username}: ${element.question}\n`
            this._questions[i].answers.forEach(e => {
                a += `---${e.userAnswer}: ${e.answer}\n`
            });
        }
        return a.toString().trim();
    }
}

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.register('asd', '123ab7', '123ab7', 'some@dasd@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan', 1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael', 2, "How old is she?");
forum.postAnswer('Michael', 2, "Tell us how tall she is.");

console.log(forum.showQuestions());