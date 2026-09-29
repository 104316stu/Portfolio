// rij maken voor de lijsten
function maakRij(titel, tekst, link, grijs) {
    const rij = document.createElement("div");
    rij.className = "row";

    const kop = document.createElement("h3");
    if (link) {
        const a = document.createElement("a");
        a.href = link;
        a.textContent = titel;
        kop.appendChild(a);
    } else {
        kop.textContent = titel;
    }

    const p = document.createElement("p");
    p.textContent = tekst;
    if (grijs) p.className = "mute";

    rij.append(kop, p);
    return rij;
}

const projectenLijst = document.getElementById("projecten-lijst");
projecten.forEach(function (project) {
    projectenLijst.appendChild(maakRij(project.titel, project.tekst, project.link, project.bezig));
});


document.getElementById("skills-kan").textContent = skills.kan.join(", ");
document.getElementById("skills-leert").textContent = "Bezig met: " + skills.leert.join(", ");
document.getElementById("skills-talen").textContent = "Talen: " + talen.join(", ");
document.getElementById("skills-hobbys").textContent = "Hobby's: " + hobbys.join(", ");

const opleidingLijst = document.getElementById("opleiding-lijst");
opleiding.forEach(function (school) {
    opleidingLijst.appendChild(maakRij(school.school, school.tekst, school.link, false));
});

const stageLijst = document.getElementById("stage-lijst");
stages.forEach(function (stage) {
    stageLijst.appendChild(maakRij(stage.bedrijf, stage.reden, stage.link, false));
});



const contactLijst = document.getElementById("contact-lijst");
contact.forEach(function (item) {
    contactLijst.appendChild(maakRij(item.label, item.tekst, item.link, false));
});