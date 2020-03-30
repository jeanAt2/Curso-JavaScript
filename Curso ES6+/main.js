// Exercicio 01

class User{
  constructor( email, senha) {
    this.email= '';
    this.senha ='';
  }

isAdmin(params) {
  if (this.admin === true){ 
    return true;
  }
  return false;

}

}

class Admin extends User{
  constructor(){
    super();
    this.admin = true;
  }
  
}

const User1 = new User('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

// Exercicio 02

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];
// 2.1
var agerUsers = usuarios.map((user) =>{
  return user.idade;
});

console.log(agerUsers);

//2.2

var employeeRocketseat = usuarios.filter((user)=>{
return user.empresa === 'Rocketseat'& user.idade >=18;
});

console.log(employeeRocketseat);

//2.3

var search = usuarios.find((user)=>{
  return user.empresa ==='Google';
});

console.log(search);


2.4

var addAge = usuarios.map((user)=>{
  return user.idade = user.idade * 2;
  
}); 
 console.log(addAge);
var filter = usuarios.filter((user)=>{
  return user.idade <= 50;
});


console.log(filter);

// 3.1

const arr = [1, 2, 3, 4, 5];

arr.map((item) => {
 return item + 10;
});

// 3.2
// Dica: Utilize uma constante pra function

const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => {
 return usuario.idade;
}
mostraIdade(usuario);

// 3.3
// Dica: Utilize uma constante pra function

const name = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) =>{
 return { nome, idade };
}
mostraUsuario(name, idade);
mostraUsuario(name);

// 3.4
const promise = () => {
  return new Promise((resolve, reject) => {
  return resolve();
  })
 }

 // 4

 const empresa = {
  nome: 'Rocketseat',
  endereco: {
  cidade: 'Rio do Sul',
  estado: 'SC',
  }
 };
 const { nome, endereco: {cidade, estado}} = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

function mostraInfo(usuario) {
  const {name, idade} = usuario;

  return `${name} tem ${idade} anos.`;
 }
 
 console.log( mostraInfo({ name: 'Diego', idade: 23 }));
 
 //5.1

 const array5 = [1, 2, 3, 4, 5, 6];

 const [x, ...y] = array5;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

function soma(){
  const array = array5.map((n)=>{
    return n + n;
  });
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3


