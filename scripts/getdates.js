
const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;


const lastModifiedSpan = document.getElementById("lastModified");
const lastModifiedDate = document.lastModified;
lastModifiedSpan.textContent = `Última modificación: ${lastModifiedDate}`;
