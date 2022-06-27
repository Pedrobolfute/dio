const formulario = document.getElementById("formulario");
const tarefas = document.getElementById("tarefas");

formulario.onsubmit = function(e){
    e.preventDefault();
    const campoDeEntrada = document.getElementById("inserir");
    novaTarefa(campoDeEntrada.value); //voltar nessa value.
    formulario.reset();
};

function novaTarefa(descricao){
    //const divFormulario = document.getElementById("tarefas");
    const criarDiv = document.createElement("div");
    const criarConteudo = document.createElement("input");
    const criarlabel = document.createElement("label");
    const descricaotxt = document.createTextNode(descricao);

    criarConteudo.setAttribute("type", "checkbox");

    criarDiv.classList.add("formulario-item");
    criarDiv.appendChild(criarConteudo);

    
    tarefas.appendChild(criarDiv);

    
}


// TO FIX.
function alerta(){
    document.body.style.backgroundColor = "rgb(130, 33, 33)";
}