const listElement = document.querySelector("#app"); // corresponde ao <ul id="app">

let posts = [];

function nutriapp() {
  fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then((r) => r.json())
    .then((json) => {
      posts = json;
      listElement.innerHTML = ""; // limpa a lista antes de popular

      posts.forEach((item) => {
        const li = document.createElement("li");
        const title = document.createElement("strong");
        const img = document.createElement("img");
        const desc = document.createElement("p");
        const link = document.createElement("a");

        title.textContent = item.titulo || item.title || "Sem título";
        if (item.capa) {
          img.src = item.capa;
          img.alt = title.textContent;
        }
        desc.textContent = item.subtitulo || item.sub_title || "";
        link.href = item.url || item.link || "#";
        link.textContent = "Abrir";

        li.appendChild(img);
        li.appendChild(title);
        li.appendChild(desc);
        li.appendChild(link);

        listElement.appendChild(li);
      });
    })
    .catch((err) => {
      console.error(err);
      alert("Deu um problema ao carregar os posts.");
    });
}

nutriapp();