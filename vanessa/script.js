const parouForm = document.getElementById('cadastro');
parouForm.addEventListener('submit', function(e){
    e.preventDefault();
});

const parouForm2 = document.getElementById('pop31');
parouForm2.addEventListener('submit', function(e){
    e.preventDefault();
});

const parouForm3 = document.getElementById('form-func');
parouForm3.addEventListener('submit', function(e){
    e.preventDefault();
});

const parouForm4 = document.getElementById('form-gestor');
parouForm4.addEventListener('submit', function(e){
    e.preventDefault();
});

function voltarMenu(){
    window.open("index.html", "_self");
}

function abrirInteressado(){
    window.open("interessado.html", "_self");
}

function abrirOrdem(){
    window.open("ordem.html", "_self");
}

function abrirFuncionario(){
    window.open("funcionario.html", "_self");
}

function abrirGestor(){
    window.open("gestor.html", "_self");
}