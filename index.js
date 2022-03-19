function prevenir(evt){
    evt.preventDefault();
}

document.getElementById('btn-entrar').addEventListener('click', prevenir, false);

function entrar(){
    const usuario = getElementById('input-usuario').value;
    const senha = getElementById('input-senha').value;
    alert(usuario);   
    
    //document.getElementById('input-usuario').value="";
}