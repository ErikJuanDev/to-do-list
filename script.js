function adicionarLista() {
    let tarefa = document.getElementById("task")
    let task = tarefa.value
    let list = document.getElementById("list")

    if (task.length <= 2) {
        alert(`Conteúdo insuficiente!`)
    } else {
      let item = document.createElement("li");
      item.innerText = `${task}`;
      //item é o elemento pai
      item.appendChild(criarRemoverSpan());
      list.appendChild(item);
      // TRANSFORMA A LISTA EM UM ARRAY E MAPEIA TODA A LISTA
      let itens = Array.from(list.getElementsByTagName("li")).map(
        (li) => li.firstChild.textContent
      );
      // SE OS ITENS FOREM ENCONTRADOS DENTRO DA LISTA, DARÁ UM ALERT
      if (itens.includes(task)) {
        alert("Essa tarefa já existe na lista!");
        item.remove();
      }
      tarefa.value = "";
      tarefa.focus();
    }
}
list.addEventListener("click", function (event) {
    //verifica se o event tem a classe com nome "remove-item"
    if (event.target.classList.contains("remove-item")) {
        //manda remover o elemento pai
      event.target.parentElement.remove();
    }
});

function criarRemoverSpan() {
    const span = document.createElement("span");
    span.innerText = "🗑️";
    span.className = "remove-item";
    span.style.cursor = "pointer";
    span.style.marginLeft = "10px";
    return span;
}

