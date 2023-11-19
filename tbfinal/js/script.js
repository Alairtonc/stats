
    

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
        var table = '<thead class="table-dark"><tr><td></td><td>Nome</td><td>Email</td><td>Profissão</td><td>Telefone</td><td>Descrição</td><td>Apagar</td></tr></thead><tbody>';
        for(var key in listaPainel){
            table += '<tr><td></td><td>'+ formatNome(listaPainel[key].nome) +'</td><td>'+ formatEmail(listaPainel[key].email) +'</td><td>'+ formatProfissao(listaPainel[key].profissao) +'</td><td>'+ formatPhone(listaPainel[key].phone) +'</td><td>'+
            formatMessage(listaPainel[key].message)  +'</td><td><img src="img/trash.png" width="25px" onclick="deleteData('+key+');"></td></tr>';
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