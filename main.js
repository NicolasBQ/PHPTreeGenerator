const form = document.querySelector("[data-tree-form]");

const sendTreeRequest = (e) => {
  e.preventDefault();
  let treeValue = document.querySelector("[data-tree-value]").value;
  let treeDisplay = document.querySelector("[data-tree-display]");

  let requestObject = new XMLHttpRequest();
  requestObject.open("POST", "main.php", true);
  requestObject.setRequestHeader(
    "Content-type",
    "application/x-www-form-urlencoded"
  );
  requestObject.onreadystatechange = () => {
    treeDisplay.innerHTML = `<p>${requestObject.responseText}</p>`;
  };
  requestObject.send(`tree_value=${treeValue}`);
};

form.addEventListener("click", sendTreeRequest);
