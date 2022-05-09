const cliente1 = 'Aline';
let idade = 33;
let peso = 63.7;
let altura = 1.53;
let plano = false;
let imc = peso / (altura * altura);

if (plano == true) {
    plano = 'Possui plano.';
} else {
    plano = 'Não possui plano.';
};

console.log(cliente1 + ' tem ' + idade + ' anos e seu índice de massa corporal é de ' + imc.toFixed(2) + '. ' + plano);

const cliente2 = 'José';
idade = 27;
peso = 83.5;
altura = 1.70;
plano = true;
imc = peso / (altura * altura);

if (plano == true) {
    plano = 'Possui plano.';
} else {
    plano = 'Não possui plano.';
};

console.log(cliente2 + ' tem ' + idade + ' anos e seu índice de massa corporal é de ' + imc.toFixed(2) + '. ' + plano);

const cliente3 = 'Carlos';
idade = 28;
peso = 80.1;
altura = 1.76;
plano = true;
imc = peso / (altura * altura);

if (plano == true) {
    plano = 'Possui plano.';
} else {
    plano = 'Não possui plano.';
};

console.log(cliente3 + ' tem ' + idade + ' anos e seu índice de massa corporal é de ' + imc.toFixed(2) + '. ' + plano);

const cliente4 = 'Ana';
idade = 26;
peso = 55;
altura = 1.62;
plano = true;
imc = peso / (altura * altura);

if (plano == true) {
    plano = 'Possui plano.';
} else {
    plano = 'Não possui plano.';
};

console.log(cliente4 + ' tem ' + idade + ' anos e seu índice de massa corporal é de ' + imc.toFixed(2) + '. ' + plano);