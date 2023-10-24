
    

    function retornar() {
        window.location = "index.html";
    }

    // Criando a lista de clientes e colaaboradores
    var listaPainel = [];


    // Salvando os Dados em Json
    function saveListStorage(listaPainel){
        var jsonStr = JSON.stringify(listaPainel);
        localStorage.setItem("listaPainel",jsonStr);
    }

    // Identifica o Registro Salvo
    function initListStorage(){
        var testList = localStorage.getItem("listaPainel");
        if(testList){
            listaPainel = JSON.parse(testList);
        }
        setList(listaPainel);
    }
    initListStorage();



    //Criando a Tabela no Front-End
    function setList(listaPainel){
        var table = '<thead class="table-dark"><tr><td></td><td>Nome</td><td>Email</td><td>Profissão</td><td>Telefone</td><td>Decrição</td><td>Apagar</td></tr></thead><tbody>';
        for(var key in listaPainel){
            table += '<tr><td></td><td>'+ formatNome(listaPainel[key].nome) +'</td><td>'+ formatEmail(listaPainel[key].email) +'</td><td>'+ formatProfissao(listaPainel[key].profissao) +'</td><td>'+ formatPhone(listaPainel[key].phone) +'</td><td>'+
            formatMessage(listaPainel[key].message) +'</td><td>'+ listaPainel[key].hoje +'</td><td><img src="img/trash.png" width="25px" onclick="deleteData('+key+');"></td></tr>';
        }
        table += '</tbody>';
        document.getElementById('listTable').innerHTML = table;
        saveListStorage(listaPainel);
    }


    function formatNome(nome){
        var str = nome.toUpperCase();
        return str;
    }

    function formatEmail(email){
        var str = email.toLowerCase();
        return str;
    }
    function formatProfissao(profissao){
        var str = profissao;
        return str;
    }

    function formatPhone(phone){
        var str = phone;
        return str;
    }

    function formatMessage(message){
        var str = message;
        return str;
    }
   


    function addData() {
        var data = new Date();
        var nome = document.getElementById("nome").value; 
        var email = document.getElementById("email").value;
        var profissao = document.getElementById("profissao").value;
        var phone = document.getElementById("phone").value;
        var message = document.getElementById("message").value;
        var hoje = data.toLocaleDateString();
        listaPainel.unshift({ "nome": nome,  "email": email, "profissao":profissao, "phone": phone, "message": message, "hoje": hoje }); 
        resetForm();
    }
   

    function resetForm() {
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("profissao").value = ""; 
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
    }

    function deleteData(id){
        if(confirm("Confirma Exclusão(S/N)?")){
            if(id == listaPainel.length - 1){
                listaPainel.pop();
            }
            else if(id == 0){
                listaPainel.shift();
            }
            else{
                var arrAuxIni = listaPainel.slice(0,id);
                var arrAuxEnd = listaPainel.slice(id + 1);
                listaPainel = arrAuxIni.concat(arrAuxEnd);
            }
            setList(listaPainel);
        }
    }





















// Obtém referências aos elementos do formulário
// // const contactForm = document.getElementById("contactForm");
// const nomeInput = document.getElementById("name");
// const emailInput = document.getElementById("email");
// const profissaoInput = document.getElementById("profissao");
// const phoneInput = document.getElementById("phone");
// const messageInput = document.getElementById("message");
// const infoContainer = document.getElementById("infoContainer");

// // Adiciona um ouvinte de evento para o envio do formulário
// contactForm.addEventListener("submit", function (event) {
//     event.preventDefault(); // Impede o envio padrão do formulário

//     // Verifica se todos os campos estão preenchidos
//     if (
//         nomeInput.value === "" ||
//         emailInput.value === "" ||
//         profissaoInput.value === "" ||
//         phoneInput.value === "" ||
//         messageInput.value === ""
//     ) {
//         // Se algum campo estiver em branco, exibe uma mensagem de erro
//         infoContainer.innerHTML = "<p>Todos os campos devem ser preenchidos.</p>";
//     } else {
//         // Se todos os campos estiverem preenchidos, cria um objeto com os dados do formulário
//         const formData = {
//             Nome: nomeInput.value,
//             Email: emailInput.value,
//             Profissao: profissaoInput.value,
//             "Número de Telefone": phoneInput.value,
//             Descrição: messageInput.value,
//         };

//         // Envia os dados para a página de destino (painel.html) usando o método POST
//         fetch("painel.html", {
//             method: "POST",
//             body: JSON.stringify(formData),
//         })
//             .then((response) => response.text())
//             .then(() => {
//                 // Exibe uma mensagem de sucesso
//                 infoContainer.innerHTML = "<p>Formulário enviado com sucesso!</p>";
//             })
//             .catch((error) => {
//                 // Lida com erros
//                 console.error("Erro ao enviar o formulário:", error);
//             });
//     }
// });


// document.addEventListener("DOMContentLoaded", function () {
//     // Obtém a referência à div onde os dados serão exibidos
//     const dataContainer = document.getElementById("dataContainer");

//     // Verifica se há parâmetros de consulta na URL (os dados enviados pelo formulário)
//     const queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);

//     if (urlParams.has("Nome")) {
//         // Recupera os valores dos parâmetros de consulta
//         const nome = urlParams.get("Nome");
//         const email = urlParams.get("Email");
//         const profissao = urlParams.get("Profissao");
//         const telefone = urlParams.get("Número de Telefone");
//         const descricao = urlParams.get("Descrição");

//         // Cria uma mensagem com os dados do formulário
//         const mensagem =
//             `<h2>Dados do Formulário:</h2>` +
//             `<p><strong>Nome:</strong> ${nome}</p>` +
//             `<p><strong>Email:</strong> ${email}</p>` +
//             `<p><strong>Profissão:</strong> ${profissao}</p>` +
//             `<p><strong>Número de Telefone:</strong> ${telefone}</p>` +
//             `<p><strong>Descrição:</strong> ${descricao}</p>`;

//         // Insere a mensagem na div dataContainer
//         dataContainer.innerHTML = mensagem;
//     }
// });





