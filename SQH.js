/*
SHQ Frame
 */



alert("SQH - Version 1.1")
while (true) {
    let command = prompt("SQH Server 1.1 - DK Studio production - SHQ Frame 1 ")

    if (command === "set[cookie_data]"){
        let name="name"
        let value= prompt("cookie: ");
        document.cookie = encodeURIComponent(name)+"="+encodeURIComponent(value)
        alert("Вот куки"+document.cookie)
        location.reload()
    }

    if (command === "set[data]"){
        text=prompt("let text in Data")
        localStorage.setItem("text-data", text)
        alert("Text Save")
    }

    if (command === "view[data]"){
        alert(localStorage.getItem("text-data"))
    }

    if (command === "view[cookie_data]"){
        alert("Вот куки"+document.cookie)
    }

    if (command === "delete[data]"){
        localStorage.clear("text-data")
    }

    if (command === "delete[cookie_data]"){
        CookiesDelete()
        alert("cookie is delete ")
        location.reload()
    }
    if (command === "sync[git]"){
        let git = prompt("Enter a link to the project from DK Studio's github (Dkhorov)")
        if (git === "https://github.com/DKhorov/uPanelCode.git"){
            alert("uPanelCode Community edition Alpha 1.6.0.0 ")
            alert("uPanelCode 1.6.0 Release Latest")
        }
        else {
            alert("Search only DKhorov repository!!!!")
        }
    }
    if (command === "sync[sysinfo]"){
        alert("SQH Framework Server 1.1.0  ")
        alert("ID: 128745326387463246")
        alert("SQH Frame #1000 Gen 1")
        alert("Graphics: No")
        alert("(C) DK Studio All rights reserved 2023-2024")
        alert("Author: Dmitry Horov ( GitHub: Dmitry Horov )")
    }

    else {
        alert("False command !")
    }
}


