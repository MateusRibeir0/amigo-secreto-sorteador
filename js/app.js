// criar a lista de amigos onde vai ser add os amigos
let amigos = [];
// criar function para add as pessoas
function adicionar() {
    // pegar o campo que é preenchido o nome das pessoas
    let amigo = document.getElementById('nome-amigo');
    // não permitir que seja enviado um valor vasio do campo
    if(amigo.value == ''){
        alert('Informe o nome do amigo!');
        return;
    }
    // não premitir que uma pessoa que já esta na lista não seja adcionada novamente
    if(amigos.includes(amigo.value)){
        alert('Você não pode adicionar duas pessoas com o mesmo nome!');
        return;
    }
    // criar uma variavél lista para vincular ao html específico e posteriormente conseguir manipular ele
    let lista = document.getElementById('lista-amigos');
    // adcionar o que foi digitado no campo na lista
    amigos.push(amigo.value);
    // caso a lista esteja vazia, mostrar no html ela apenas com o valor que foi digitado no campo amigos, na tela
    if(lista.textContent == ''){
        lista.textContent = amigo.value;
    } else{
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    // limpar o campo amigos
    amigo.value = '';
}

// criar function para sortear os amigos que foram adicionados na lista
function sortear(){
    document.getElementById('lista-sorteio').innerHTML = '';
    // não deixar sortear se ao menos 4 pessoas não forem add
    if(amigos.length <= 4){
       alert('Adicione ao menos 4 amigos.');
       return;
    }
    // embaralhe os amigos da lista
    embaralha(amigos);
    // definir uma variavel para o campo do html onde aparece a lista
    let sorteio = document.getElementById('lista-sorteio'); 
    // criar um loop para export no html o sorteio
    // a variável criada i vai ser o amigos[i], ou seja a posição i da lista que fizemos.
    // COMO RESOLVER O FOR SEM IF ELSE.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    for(let i = 0; i < amigos.length; i++){
      // a condicional i precisa ser o tamanho da lista de amigos - 1 pois a primeira posição é 0 na lista  
      if(i == amigos.length - 1){
        // se atender o valor e o loop tiver atingido o ultimo elemento da lista, precisamos colocar  o ultimo com o primeiro
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>'
      } else{
        // se não atender fazemos a mesma coisa mas somamos com o próximo da lista até atingir o ultimo
      sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>'
      }

    }
}
// esta função já é preparada na internet e pude adaptar ela para embaralhar o conteudo lista amigos
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
// limpar campos necessários
function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
