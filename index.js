const today = new Date();
const thisYear = today.getFullyear();
 const footer = document.querySelector('footer');
 const copyright = document.createElement('p');
 copyright.innerHTML = `Jukari Richardson &#169;${thisYear}` 
footer.appendChild(copyright);

const skills = [Html, CSS, Javascript]
const skillSection = document.querySelector('#Skills')

//  const messageForm = document.querySelector('[name = "leave_message"] ')
//  const submission = messageForm.addEventListener('submit', handleSubmit)
//  const messageSection =document.querySelector('#messages')
//  messageSection.style.visibility = 'hidden';

let skillsList = skillSection.querySelector('ul')
 for(i =0; i < skills.length; i ++){
 let skill = document.createElement('li');
 skill.innerText = skills[i];
 ul.appendChild(skill);
 }

// function handleSubmit(event) {
//     const name = event.target[0].value;
//     const email = event.target[1].value;
//     const message = event.target[2].value; 

//     let newMessage = document.createElement('li')
//     newMessage.innerHTML = `<a href = "mailto:${email}">${name}</a><span>${message}`
//     let removeButton =document.createElement('button');
//     removeButton.innerHTML = "Remove";
//     removeButton.type = "button";
//     removeButton.addEventListener('onClick', (event) => event.target.parentElement.remove)
//     newMessage.appendChild(removeButton);
//     messageSection.appendChild(newMessage);
//     if (messageSection.style.visibility === "hidden") messageSection.style.visibility = "visible";
//     event.preventdefault();
//     messageForm.reset()
// }

