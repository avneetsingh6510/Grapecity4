class QAItem{

constructor(question,answer){

this.question=question
this.answer=answer
this.element=null

}

toggle(allItems){

allItems.forEach(item=>{
if(item!==this){
item.close()
}
})

this.element.classList.toggle("active")

this.updateIcon()

}

close(){

this.element.classList.remove("active")

this.updateIcon()

}

updateIcon(){

const icon=this.element.querySelector("i")

if(this.element.classList.contains("active")){

icon.classList.replace("fa-plus","fa-minus")

}
else{

icon.classList.replace("fa-minus","fa-plus")

}

}

render(allItems){

const item=document.createElement("div")
item.className="faq-item"

const questionDiv=document.createElement("div")
questionDiv.className="question"

const text=document.createElement("span")
text.textContent=this.question

const icon=document.createElement("i")
icon.className="fa-solid fa-plus icon"

questionDiv.appendChild(text)
questionDiv.appendChild(icon)

const answerDiv=document.createElement("div")
answerDiv.className="answer"

const p=document.createElement("p")
p.textContent=this.answer

answerDiv.appendChild(p)

item.appendChild(questionDiv)
item.appendChild(answerDiv)

questionDiv.addEventListener("click",()=>{

this.toggle(allItems)

})

this.element=item

return item

}

}

const faqData=[

new QAItem(
"What is JavaScript?",
"JavaScript is a programming language used to create interactive and dynamic web pages."
),

new QAItem(
"What is Object-Oriented Programming?",
"OOP is a programming paradigm where code is organized into objects with properties and methods."
),

new QAItem(
"What is the DOM?",
"The DOM (Document Object Model) represents the structure of a webpage and allows JavaScript to manipulate it."
),

new QAItem(
"What is an Accordion UI?",
"Accordion UI allows users to expand and collapse content sections for better organization."
)

]

const container=document.getElementById("faq")

faqData.forEach(item=>{

container.appendChild(item.render(faqData))

})
