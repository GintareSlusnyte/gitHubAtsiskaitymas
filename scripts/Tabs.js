// export default class Tabs {
//     constructor({description, close, image, par1, par2}) {
//         this.description = description;
//         this.close = close;
//         this.image = image;
//         this.par1 = par1;
//         this.par2 = par2;
//         return this.render();
//     }
//     render(){

//         const divCard = document.createElement("div");
//         divCard.classList.add("tabs");

//         const description = document.createElement("h1");
//         description.textContent = this.description;
//         description.classList.add("headeris");

//         const closeBtn = document.createElement("i");
//         closeBtn.classList.add("fa-solid", "fa-xmark");
//         closeBtn.addEventListener("click", () => {
//             modal.remove();
//             this.toggleTabs();
//         });

//         const tabImage = document.createElement("img");
//         tabImage.src = this.image;
//         tabImage.alt = "tab photo";

//         const parPirmas = document.createElement("p");
//         parPirmas.textContent = this.par1;

//         const parAntras = document.createElement("p");
//         parAntras.textContent = this.par2;

//         divCard.append(description, closeBtn, tabImage, parPirmas, parAntras);

//         return divCard;
//     }

//     toggleTabs() {
//         const tabuSection = document.querySelector("#table");
//         tabuSection.classList.toggle("hide");
//     }

// }
