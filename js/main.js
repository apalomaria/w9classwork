//5. change that elements background-color
var big= document.getElementById("box")
big.className="big yellow"
//6.Create a div and give it an ID
var newDiv = document.createElement("div");
var bob=document.getElementById("bob");//is this needed?
newDiv.id="diva"
bob.appendChild(newDiv);

//7.Create an h1 tag and add some text to it using the textContent property*NEED HELP ON textContent
var newH1=document.createElement("H1");
// var text=getElementById("text").textContent;
bob.appendChild(newH1);

//8. Add that h1 to the div in your HTML.
document.getElementById("box").appendChild(newH1)

//9. Create another div and give it an ID
var secondDiv=document.createElement("div");
secondDiv.id="car"
bob.appendChild(secondDiv)

//10. Create an h1 element, create a text node.
//Add the text node to your h1, then add your h1 to your div
var secondH1=document.createElement("H1");
var text=document.createTextNode("Adding text with TextNode");

secondH1.appendChild(text)
document.getElementById("car").appendChild(secondH1)
//11.Create an image and a button tag
var img=document.createElement("img")
img.setAttribute("src", "img/first.jpg");
img.setAttribute("alt", "first image displaying")
bob.appendChild(img)

var btn =document.createElement("button")
var click=document.textNode("Click here to change image")
btn.appendChild(click)
bob.appendChild(btn)
//12.Create a function that changes the image source and alt attributes when you click on that button.
