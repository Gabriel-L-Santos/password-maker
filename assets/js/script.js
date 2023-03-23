// variáveis do gerador de senha

let sliderElement = document.querySelector("#slider");
let buttonELement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?';
let novaSenha = '';

// define o tamanho da senha baseado na quantidade de caracteres escolhida no slider

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

// função que gera a senha aleatória e mostra-o na página

function generatePassword(){

    let pass = '';

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;

}

// função para copiar a senha com o clique do mouse

function copyPassword(){
    navigator.clipboard.writeText(novaSenha);    
}
