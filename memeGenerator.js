document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const inputs = document.querySelectorAll('input');
    const displayArea = document.getElementById('displayArea');
  
    // const puppyUrl = 'https://fthmb.tqn.com/yaoer7uekYUl9PP6lIYiI0IEZnk=/1500x998/filters:fill(auto,1)/Biting-UweKrejci-Getty-56a7a3415f9b58b7d0ec54d4.jpg'
    // addContent("https://i.ytimg.com/vi/0Y4mx6KJAIk/maxresdefault.jpg", "I'm Mr. Meeseeks", "Look At Me!");
    // addContent(puppyUrl, "Raw")
  
    form.addEventListener('submit', function(e) {
      addContent(inputs[0].value, inputs[1].value, inputs[2].value);
      form.reset();
    });
  
    function addContent(imgSrc, topText, bottomText) {
      const section = document.createElement('section');
      const image = document.createElement('img');
      const topP = document.createElement('p');
      const bottomP = document.createElement('p');
      const newBtn = document.createElement('button');
      section.classList.add('imgSection');
      topP.classList.add('topText');
      bottomP.classList.add('bottomText')
  
      image.src = imgSrc;
      topP.textContent = topText;
      bottomP.textContent = bottomText;
      newBtn.textContent = "X";
      section.append(image, topP, bottomP, newBtn);
      displayArea.append(section);
    }
  
    displayArea.addEventListener('click', function(e) {
      if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
      }
    });
  });