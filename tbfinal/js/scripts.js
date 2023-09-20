function retornar(){
         window.location="painel.html";
    }


var listaPainel = [];

        function saveListStorage(listaPainel){
            var jsonStr = JSON.stringify(listaPainel);
            localStorage.setItem("listaPainel",jsonStr);
        }

        function initListStorage(){
            var testList = localStorage.getItem("listaPainel");
            if(testList){
                listaPainel = JSON.parse(testList);
            }
            setList(listaPainel);
        }

        initListStorage();

        function setList(listaPainel){
            var table = '';
            for(var key in listaPainel){
                table += '<tr><td></td><td>'+ formatNome(listaPainel[key].nome) +
                '</td><td>'+ formatEmail(listaPainel[key].email) +'</td><td>'+ 
                formatProfissao(listaPainel[key].profissao) +'</td><td>'+ 
                formatPhone(listaPainel[key].phone) +'</td><td>'+
                formatMessage(listaPainel[key].message) +'</td><td>'+ 
                listaPainel[key].hoje +'</td><td><img src="img/trash.png" width="25px" onclick="deleteData('+key+');"></td></tr>';
            }
            document.querySelector('#listTable tbody').innerHTML = table;
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
            setList(listaPainel);
            resetForm();
            validateForm();
            
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


        function validateForm() {
            var nome = document.getElementById("nome").value;
            var email = document.getElementById("email").value;
            var profissao = document.getElementById("profissao").value;
            var phone = document.getElementById("phone").value;
            var message = document.getElementById("message").value;
        
            if (nome === "" || email === "" || profissao === "" || phone === "" || message === "") {
                alert("Por favor, preencha todos os campos.");
               return false; // Era pra impedi o envio do formulário se algum campo estiver vazio
            }
        
            if (message.length > 20) {
                alert("A descrição da vaga deve ter no máximo 20 caracteres.");
               // return false; // Impede o envio do formulário se a descrição for muito longa
            }
            return true; 
        }

