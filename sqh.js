/*
SHQ Framework 2 (11.07.2024)
 */


function set(){ 
alert("SQH Framework")
while (true) {
    let command = prompt("Enter command:")

    if (command === "set cookie"){
        let name="name"
        let value= prompt("cookie: ");
        document.cookie = encodeURIComponent(name)+"="+encodeURIComponent(value)
        alert("Вот куки"+document.cookie)
        location.reload()
    }

    if (command === "set localstorage"){
        text=prompt("let text in Data")
        namelocal=prompt("let name memory")
        localStorage.setItem(namelocal, text)
        alert("Text Save")
    }

    if (command === "view localstorage"){
        WERS=prompt("Enter name LocalStorage")
        alert(localStorage.getItem(WERS))
    }

    if (command === "view cookie"){
        alert("Вот cookie"+document.cookie)
    }

    if (command === "clean localstorage"){
        localStorage.clear("text-data")
    }

    if (command === "clean cookie"){
        CookiesDelete()
        alert("cookie is delete ")
        location.reload()
    }
    if (command === "ResetAll"){
        CookiesDelete()
        localStorage.clear("text-data")
        location.reload()
    }
   


    if (command === "info"){
        alert("SQH Framework Server 2.0.0  ")
        alert("ID: 34343232323")
        alert("Graphics: Yes")
        alert("(C) DK Studio All rights reserved 2023-2024")
        alert("Author: Dmitry Horov ( GitHub: Dmitry Horov )")
    }

    else {
        alert(" :)")
        
    }
}
}



