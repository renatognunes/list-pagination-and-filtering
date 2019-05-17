/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


// Global Variables
const divPage = document.querySelector('.page');
const pageHeader = document.querySelector('.page-header');
const list = document.querySelectorAll('li');
const perPage = 10;


// Creating search bar dinamically
const div = document.createElement('div');
div.className = 'student-search';
pageHeader.appendChild(div);
const input = document.createElement('input');
input.placeholder = 'Search for students...';
div.appendChild(input);
const button = document.createElement('button');
button.textContent = 'Search';
div.appendChild(button);


// Create and display dinamically (when invoked) the "No results found!" message.
const messageDiv = document.createElement('div');
divPage.appendChild(messageDiv);
const messageText = document.createElement('span');
messageDiv.appendChild(messageText);
const noStudentsFound = (display) => {
   messageDiv.innerHTML = "No results found!";
   messageDiv.style.display = display;
};


/* 
Search bar functionality
This function gets two arguments as parameters, the list of students and the input value
typed in the search bar. 
If the input value is empty, The page will display all students as the initial page, because the function
understands that no filter request was passed in. So there is no need to filter the list. 
If the input value is found in one of the students name, that student will be displayed.
Although, if the input value is not found in any student name, the message 'No results found!' will be diplayed.
Every time this function is invoked, it removes all the previews displayed students and pagination,
and it recreates a new one calling the 'showPage' and 'appendPageLinks' functions 
with the new values passed to it as a 'filter'.
*/
const search = (searchInput, studentsList) => {
   const page = document.querySelector('.pagination');
   const results = [];

   if (searchInput.value === "") {
      divPage.removeChild(page);
      showPage(studentsList, 1);
      appendPageLinks(studentsList);
      noStudentsFound('none');
   } else {
      for (let i = 0; i < studentsList.length; i++) {
         studentsList[i].style.display = 'none';
         let studentLi = studentsList[i].querySelector('.student-details');
         let name = studentLi.querySelector('h3');
         if (searchInput.value.length !== 0 && name.textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
            studentsList[i].style.display = '';
            results.push(studentsList[i]);
         }
      } if(results.length > 0) {
         noStudentsFound('none');
         divPage.removeChild(page);
         showPage(results, 1);
         appendPageLinks(results);
      } else {
         noStudentsFound('');
         divPage.removeChild(page);
         showPage(results, 1);
         appendPageLinks(results);
      }
   }
};

// Search bar Event Listener
button.addEventListener('click', (event) => {
   if (event.target.tagName === 'BUTTON') {
      search(input, list);
   }
});

//The 'keyup' listener is a fast and sofisticated way to display the results as the user type for a search.
input.addEventListener('keyup', (e) => {
   if (e.target.tagName === 'INPUT') {
      search(input, list);
   }
});


/* 
   This function takes a list of students as an array and the page number as
   arguments to calculate the number of students displayed in the page. 
   It hides all the items in the list passed as argument except for 
   the ten students selected to be displayed in the page passed as argument. 
*/
const showPage = (list, page) => {
   const startIndex = (page * perPage) - perPage;
   const endIndex = page * perPage;

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
      };
   };
};


/*
   This function generates a button for the pagination for every 10 students in the list passed as argument.
   The buttons are created as needed. If the list of students are not a rounded number e.g. 54, The last 4
   students in the list will be placed in the last button. A button will never hold more than 10 students. 
   The function then creates the functionality for the buttons. Which when clicked, it will display
   the students assigned to that specific button. The first button is always 'active' as the first 10 students
   or equivalent (less than) are filtered by the search input and displayed first.
   Finally, the buttons are appended to the page and the pagination buttons are displayed at the bottom.
*/
const appendPageLinks = (list) => {
   const divPage = document.querySelector('.page');
   const div = document.createElement('div');
   div.className = 'pagination';
   divPage.appendChild(div);
   const ul = document.createElement('ul');
   div.appendChild(ul);

   const numPages = Math.ceil(list.length / perPage);
   for (let i = 0; i < numPages; i++) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = i + 1;
      li.appendChild(a);
      const links = document.querySelectorAll('a');
      links[0].className = 'active';
   };

   const links = document.querySelectorAll('a');
   for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', (e) => {
         for (let i = 0; i < links.length; i++) {
            links[i].className = '';
         }
         e.target.className = 'active';

         showPage(list, e.target.textContent);
      });
   };
};


//Initializer 
showPage(list, 1);
appendPageLinks(list);