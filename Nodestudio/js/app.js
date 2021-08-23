/*window.alert("Começou");
console.log(
window.screen.width
)

console.log(
    window.navigator.cookieEnabled
)
//window.console.log("Eu sou o console");

console.log(
  document.getElementById("titulo").innerHTML

)

/*---O BOM- Browser Object Model-----------



console.log(
    screen //Retorna informação sobre a tela como width, height ex: (screen.width)
    )

console.log(
    navigator // Retorna as informações sobre o navegador que esá sendo utilizado 
)

console.log(
    location //Retorna as informações da pagina atual podendo redirecionar para uma pagina 
    //exemplo location.href = "http://www.google.com"
)



console.log(
    history //mostra o historico podendo ser usado para redirecionamento utilizando o onclick 
)

exemplo:


function voltar(){
    history.back()
}

function adiantar(){
    history.forward()
}
/*-----------DOM- Document Object Model------------
//Mostrando o conteudo da div que tem como id fruta

console.log(
    document.getElementById("fruta").innerHTML
    )

    //Mostrando o conteudo da div que tem como class carro com indice 0 
    console.log(
    document.getElementsByClassName("carro")[1].innerHTML
        )
    
    /*
console.log(
    document.anchors[]
    )

console.log(
   Document.applets
)

console.log(
    Document.areas[]
    )

    console.log(
    Document.embeds[]
        )

        console.log(
    Document.forms[]
            )


            console.log(
    Document.layers[]
                )

                console.log(
    Document.links[]
                    )*/

                    /*------Criar novo conteudo------

 var paragrafo = document.getElementById("p1")
paragrafo.innerHTML = "Novo conteudo"

 /*-----Alterar Style----------------

paragrafo.style.color = "red";
paragrafo.style.backgroundColor = "#333";
paragrafo.style.height = "400px";


/*--------------Alterar Atributos--------------------
var imagem = document.getElementById("imagem")
imagem.src = "html.jpg"
imagem.alt = "Teste de imagem"
imagem.width = "30"

/*--------------Dom create Element--------------
console.log(
    document.createElement("div")
)

var imagem = document.createElement("img")
imagem.src = "js.png"


console.log(
    imagem
)
*/
var paragrafo1 = document.createElement("p")
paragrafo1.innerHTML = "OLa DEV"


console.log(
    imagem.p
)


/*---------appendChild = serve para acresentar algo dentro de um elemento pai ----**/
var p = document.createElement("p")
p.innerHTML = "Olá DEV"
document.getElementById("conteudo").appendChild("p")


var img = documento.createElement(img)
img.src = "html.jpg"
document.getElementById("conteudo").appendChild(img)


/*----Oremovechild remove o elemento filho -----*/
document.getElementById("conteudo").removeChild(img)



/*------Dom child nodes-----------
document é reponsavel por fornecer acesso ao javascript ao navegador-----*/

/*----Retorna o ultimo elemento node filho-----*/
console.log(
    document.documentElement.lastChild
)

/*----------Retorna o primeiro elemento node filho ----------*/

console.log(
document.documentElement.firstChild
    )

    /*----------------Mostra os nós filhos de um nó no caso body-----*/
    console.log(
        document.body.childNodes
    )


    /*-----Retornar numeros de nós-*--------------*/
  var lista = document.body.childNodes
  alert(lista.length)

  /*------------PAra exibir um nó--------------*/
  alert(lista[5].innerHTML)

  /*----Retorna o nome do nó----------------------*/
  alert(lista[5].nodeName)

  /*-------------Retorna um numero -----------*/
  alert(lista[1].nodeType)


  /*--- *1 - nós de elemento
  *2 - nó de atributo
  *3 - nó de texto
  *8 - nó de comentario */

















