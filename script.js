document.querySelector("#mensagem-input").addEventListener("keydown", (event) => {
    if(event.key === "Enter")
      getMessage();
  });
  
  document.querySelector("#submit").addEventListener("click", () => {
      getMessage();
  });
  
  getMessage = () => {
    document.querySelector("#mensagem-output").textContent = document.querySelector("#mensagem-input").value;
    document.querySelector("#mensagem-input").value = "";
  }