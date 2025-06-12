fetch('data/mods.json')
    .then(res => res.json())
    .then(data => renderMods(data))
    .catch(err => console.error('Error: ', err))

function renderMods(mods)
{
    const container = document.getElementById("mod-list");

    mods.forEach(
        mod => {
            const modDiv = document.createElement("div");
            modDiv.className = "mod";

            const img = document.createElement("img");
            img.src = mod.image;
            img.alt = mod.description;

            const textDiv = document.createElement("div");
            textDiv.className = "text";

            const nameP = document.createElement("p");
            nameP.className = "name";
            nameP.textContent = mod.name;

            const descP = document.createElement("p");
            descP.className = "description";
            descP.textContent = mod.description;

            const link = document.createElement("a");
            link.href = mod.link;
            link.target = "_blank";
            link.textContent = "Gamebanana";

            textDiv.appendChild(nameP);
            textDiv.appendChild(descP);
            textDiv.appendChild(link);

            modDiv.appendChild(img);
            modDiv.appendChild(textDiv);

            container.appendChild(modDiv);
        }
    );
}