Treehouse Techdegree: FSJS project 2 - List Filter and Pagination

- The Project
The project implements functionally to display a list of students more organized and clean. 
The project needed to follow the core principles of Progressive Enhancement. 
The principal function added to this project is a pagination feature, which allows the user to navigate through a list of students using buttons, buttons that holds the max of 10 students per page. 


- The Development Process
The complexity of creating the buttons, adding functionality and appending to the page was challenging to my coding level. I had to use methods like 'Math.ceil' which I knew how it worked I had never used before. 
Also, when adding the event listener to each button in the lines 147 - 153 was a little complicated. 
Especially when I had to use the e.target.textContent as an argument to select which page should be displayed.
Overall to achieve the 'meet expectations' requirement was not so difficult as trying to achieve the requirements
to 'exceeds expectations'.


- “Exceeds Expectations” feature
The requirement to achieve 'Exceeds Expectations' was the more difficult programming challenge that I have faced so far.
As a new programmer, I had to use so many new technics to accomplish this feature. 
The search bar has a complex function, and I worked hard to make sure I have no bugs and everything was working as I wanted. I added functionality that when the input value of the search is empty or when you search for an empty value,
the page will display all students. The idea is that when you leave the search bar empty, you remove all filters. 
Which means, there is no filter added to the list, so all students must be displayed. 
The search bar function has three main exits. 
1- Empty search will result in no action basically. Although if you are
navigating through the students using the pagination button and you click in 'search' with an empty value, it will bring you to the 'homepage' which, I specifically designed for it.
2- Founding a student and displayed in was difficult, but with the 'warm-up' projects provided by Treehouse, I could
use the knowledge I gained in those projects to add this functionality. I also had to use a lot of DOM traversal to search specifically from the name of every student, and not from all the student properties like email and so on.
3- Finally, if the input value from the search bar was not found in any student name, the message 'No results found!' will be displayed.  


- Overall 
it was a very challenging project. Especially trying to achieve the 'Exceeds Expectations' requirements.  I really enjoy building it and I've learned a lot from it.