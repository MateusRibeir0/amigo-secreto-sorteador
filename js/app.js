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
    // Embaralhar os amigos da lista
    embaralha(amigos);

    // Definir uma variável para o campo do HTML onde aparece a lista
    let sorteio = document.getElementById('lista-sorteio');

    // Criar um loop para exportar no HTML o sorteio
    for (let i = 0; i < amigos.length; i++) {
    // Calcular o índice do próximo amigo, considerando a circularidade da lista
    let proximoIndice = (i + 1) % amigos.length;

    // Adicionar a entrada ao HTML
    sorteio.innerHTML += amigos[i] + '-->' + amigos[proximoIndice] + '<br>';
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
