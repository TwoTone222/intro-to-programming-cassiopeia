const today = new Date();
const thisYear = today.getFullYear();
 const footer = document.querySelector('footer');
 const copyright = document.createElement('p');
 copyright.innerHTML = `Jukari Richardson &copy;${thisYear}` 
footer.appendChild(copyright);
const messageSection = document.querySelector('#MESSAGES');
const messageList = messageSection.querySelector('ul');
 const messageForm = document.querySelector('[name = "leave_message"] ')
 const submission = messageForm.addEventListener('submit', handleSubmit)
const projectSection = document.querySelector('#Projects');

fetch('https://api.github.com/users/twotone222/repos')
.then((response) => response.json())
.then(afterResponse)
.catch(handleErrors);

function afterResponse(response) {
  for(let i = 0; i < response.length; i++) {
    let project = document.createElement("li");
    project.innerHTML = `<a href= "${response[i].html_url}">${response[i].name}</a>`;
    let details = document.createElement("ul");
    let description = document.createElement("li");
    description.innerHTML = response[i].description;
    details.appendChild(description);
    let date = document.createElement("li");
    date.innerHTML = response[i].created_at;
    details.appendChild(date);
    project.appendChild(details);
    if(i === 0) console.log(response[i]);
    project.classList.add("projects");
    projectSection.appendChild(project);

  }
}

function handleErrors(error) {
  console.log("unable to load github api", error);
  let item = document.createElement("li");
  item.innerHTML = "Unable to load repositories. Please try agin later.";
  projectSection.appendChild(item);

}

const skills = ['Html', 'CSS', 'Javascript'];
const skillSection = document.querySelector('#SKILLS')
const skillsList =skillSection.querySelector('ul')
 for(i = 0; i < skills.length; i ++){
 let skill = document.createElement('li');
 skill.innerText = skills[i];
 skillsList.appendChild(skill);
 }

 function handleSubmit(event) {
    event.preventDefault();

    const name = event.target[0].value;
    const email = event.target[1].value;
    const message = event.target[2].value; 

    let newMessage = document.createElement('li')
    newMessage.innerHTML = `<a href = "mailto:${email}">${name}</a><span> ${message}</span>`
    let removeButton=document.createElement('button');
    removeButton.innerHTML = "Remove";
    removeButton.setAttribute("type", "button");
    removeButton.addEventListener('click', (event) => event.target.parentElement.remove());
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageSection.appendChild(newMessage);
    if (messageSection.style.visibility === "hidden") messageSection.style.visibility = "visible";
    messageForm.reset();
} 


function removeElement(event) {
   event.target.parentElement.remove();
   if (messageSection.childNodes.length < 6) messageSection.style.visibility = 'hidden;'
}
 
function editElement(event) {
    const item = event.target.parentElement;
    let textElement = item.childNodes[2];
    let newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = "edited_text";
    newInput.value = textElement.innerHTML;
    let submitted = document.createElement('button')
    submitted.innerHTML = "Submit Edit";
    submitted.type = "button";
    submitted.addEventListener('click', editMessage)
    textElement.innerHTML = "";
    textElement.appendChild(newInput);
    textElement.appendChild(submitted);
    event.target.remove();
};

function editMessage(event){
    let li = event.path[2];
    li.children[1].innerHTML = event.path[1].children[0].value;
    let editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.type = 'button';
    editButton.addEventListener('click', editElement);
    let children = [].slice.call(li.childNodes);
    children.splice(3, 0, editButton);
    li.innerHTML = "";
    children.foreach((item,i) => {
    li.appendChild(item)
});




window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

}

