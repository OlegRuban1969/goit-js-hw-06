const fontSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

// элемент fontSizeControlEl - это "ползунок" (type="range")
  fontSizeControlEl.addEventListener("input", function() {
    const fontSize = fontSizeControlEl.value + "px"; // текущее значение ползунка в рх
    console.log(fontSize);
    
    textEl.style.fontSize = fontSize; //присваиваем полученное значение ползунка (размера текста) в font-size
  });

