// cadastro com crud

const botao = document.getElementById('btnCadastrar');
//const listaUsuario = [];

// criacao registro
botao.addEventListener('click', function () {
    listaUsuario = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = {
        usuario: document.getElementById('login').value,
        senha: document.getElementById('senha').value
    };
    //console.log(usuario);
    listaUsuario.push(usuario);
    listaJson = JSON.stringify(listaUsuario);
    localStorage.setItem("usuarios", listaJson);
    document.getElementById('login').value = ' ';
    document.getElementById('senha').value = ' ';
    listar();
});

function listar() {
    const usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    let tabela = document.getElementById('lista_usuarios');
    tabela.innerHTML = '';
    usuariosCadastrados.forEach((usuario, index) => {
        let linha = document.createElement('tr');

        linha.innerHTML = `
            <td>${usuario.usuario}</td>
            <td>${usuario.senha}</td>
            <td>
                <button onclick="editarUsuario(${index})">Editar</button>
                <button onclick="excluirUsuario(${index})">Excluir</button>
            </td>
        `;
        tabela.appendChild(linha);
    });
}

function editarUsuario(index){
    const usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    const objUsuario = usuariosCadastrados[index];
    document.getElementById("login").value = objUsuario.usuario;
    document.getElementById("senha").value = objUsuario.senha;
    
}

function excluirUsuario(index){
    //pegando o Json da memoria usuarios do navegador
    const usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    
    if(confirm("Você realmente quer excluir?")){
    //apagando o index do vetor da memoria
    usuariosCadastrados.splice(index, 1);
    //atualizando a memoria
    listaJson = JSON.stringify(usuariosCadastrados);
    localStorage.setItem("usuarios",listaJson);
   
    }
     listar();
}

