function adicionarTarefa() {
  const inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim();

  const mensagem = document.getElementById("mensagem");

  if (tarefa == "") {
    let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!";
    mensagem.textContent = mensagemErro;
    mensagem.style.color = "red";
  } else if (tarefa.length < 5) {
    let mensagemErro = "Digite no mínimo 5 caracteres!";
    mensagem.textContent = mensagemErro;
    mensagem.style.color = "red";
  } else {
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
    mensagem.textContent = mensagemSucesso;
    mensagem.style.color = "green";

    const listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefa;
    listaTarefas.appendChild(novaTarefa);

    const botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";
    botaoEditar.className = "botao-editar";

    botaoEditar.addEventListener("click", function () {
      const novoTexto = prompt(
        "Edite sua tarefa:",
        novaTarefa.firstChild.textContent
      );
      if (novoTexto !== null) {
        const textoEditado = novoTexto.trim();

        if (textoEditado.length < 5) {
          mensagem.textContent =
            "A tarefa editada deve ter pelo menos 5 caracteres!";
          mensagem.style.color = "red";
        } else {
          novaTarefa.firstChild.textContent = textoEditado;
          mensagem.textContent = "Tarefa editada com sucesso!";
          mensagem.style.color = "blue";
        }
      }
    });

    const textoTarefa = document.createElement("span");
    textoTarefa.textContent = tarefa;

    novaTarefa.appendChild(textoTarefa);

    const arquivo = inputImagem.files[0];
    if (arquivo) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        img.alt = "Imagem da tarefa";
        img.className = "imagem-tarefa";
        img.style.width = "40px";
        img.style.height = "40px";
        img.style.marginLeft = "10px";

        novaTarefa.insertBefore(img, textoTarefa.nextSibling);
      };
      reader.readAsDataURL(arquivo);
    }

    const botaoSubir = document.createElement("button");
    botaoSubir.textContent = "Subir";
    botaoSubir.className = "botao-subir";

    const botaoDescer = document.createElement("button");
    botaoDescer.textContent = "Descer";
    botaoDescer.className = "botao-descer";

    botaoSubir.addEventListener("click", function () {
      const anterior = novaTarefa.previousElementSibling;
      if (anterior) {
        listaTarefas.insertBefore(novaTarefa, anterior);
      }
    });

    botaoDescer.addEventListener("click", function () {
      const proximo = novaTarefa.nextElementSibling;
      if (proximo) {
        listaTarefas.insertBefore(proximo, novaTarefa);
      }
    });

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.className = "botao-excluir";
    botaoExcluir.onclick = function () {
      novaTarefa.remove();
      mensagem.textContent = "Tarefa removida!";
      mensagem.style.color = "black";
    };
    novaTarefa.appendChild(botaoEditar);
    novaTarefa.appendChild(botaoExcluir);
    novaTarefa.appendChild(botaoSubir);
    novaTarefa.appendChild(botaoDescer);
    listaTarefas.appendChild(novaTarefa);
  }

  inputTarefa.value = "";
  inputImagem.value = "";
}
