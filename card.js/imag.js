function alternarImagem() {

    let img = document.getElementById("imagemInterruptor");

    if (img.src.includes("img/TheMarrows.webp")) {
        img.src = "img/MarrowsMap.webp";
    } else {
        img.src = "img/TheMarrows.webp";
    }
}