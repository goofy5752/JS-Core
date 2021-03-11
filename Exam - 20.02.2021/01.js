function solve() {
   const button = document.getElementsByClassName('btn create')[0];
   const author = document.getElementById('creator');
   const title = document.getElementById('title');
   const category = document.getElementById('category');
   const content = document.getElementById('content');

   button.addEventListener('click', (e) => {
      e.preventDefault();
      const createArticle = document.createElement('article')

      const createH1 = document.createElement('h1')
      createH1.textContent = title.value;

      const createCategory = document.createElement('p')
      createCategory.textContent = "Category:"

      const categoryName = document.createElement('strong')
      categoryName.textContent = category.value;

      createCategory.appendChild(categoryName);

      const createCreator = document.createElement('p')
      createCreator.textContent = 'Creator:'

      const creatorName = document.createElement('strong')
      creatorName.textContent = author.value;

      createCreator.appendChild(creatorName);

      const createContent = document.createElement('p')
      createContent.textContent = content.value;

      const createDiv = document.createElement('div');
      createDiv.classList.add('buttons');

      const delButton = document.createElement('button');
      delButton.classList.add('btn', 'delete');
      delButton.textContent = 'Delete'
      delButton.addEventListener('click', (e) => {
         const articleToDelete = e.target.parentElement.parentElement;
         articleToDelete.remove();
      })

      const archiveButton = document.createElement('button');
      archiveButton.classList.add('btn', 'archive');
      archiveButton.textContent = 'Archive';
      archiveButton.addEventListener('click', (e) => {
         const ol = document.getElementsByTagName('ol')[0];
         const li = document.createElement('li');
          
         const myTitle = e.target.parentElement.parentElement.innerText.split('\n')[0];
         const articleToDelete = e.target.parentElement.parentElement;
         articleToDelete.remove();
         li.textContent = myTitle;
         ol.appendChild(li);
      })
      createDiv.appendChild(delButton);
      createDiv.appendChild(archiveButton)

      createArticle.appendChild(createH1)
      createArticle.appendChild(createCategory)
      createArticle.appendChild(createCreator)
      createArticle.appendChild(createContent)
      createArticle.appendChild(createDiv);


      const sec = document.getElementsByTagName('section')[1];
      sec.appendChild(createArticle);
   })
}
