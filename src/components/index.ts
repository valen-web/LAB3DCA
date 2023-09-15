import objectWithImages from"./data"
console.log(objectWithImages);
import pixelcolor,{ colorDiv } from "./pixels/images";
console.log(colorDiv);



class pixels extends HTMLElement{
    images: any = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"})

        objectWithImages.images.forEach((array) => {
            const arraypixels = this.ownerDocument.createElement("div")
            arraypixels.classList.add("arraypixels")

            array.forEach((line) => {
            const lineImages = this.ownerDocument.createElement("div")
            lineImages.classList.add("lineImages")
            line.forEach((number) => {
            const color = this.ownerDocument.createElement("pixelcolor-cantainer")
            if (number === 0) {
                color.setAttribute(colorDiv.divcolor, "white")
            } else {
                color.setAttribute(colorDiv.divcolor, "black")
            };
            lineImages.appendChild(color)
        });
        arraypixels.appendChild(lineImages)
    })
    this.images.push(arraypixels)
})}

      connectedCallback() {
      this.render()
      }


      render() {
        if(this.shadowRoot) {
        this.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="./index.css">
        `
        this.images.forEach((div:HTMLDivElement) => {
            this.shadowRoot?.appendChild(div)
        });
    }
}
}

customElements.define("pixels-container", pixels)

   

