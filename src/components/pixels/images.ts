export enum colorDiv {
    "divcolor" = "divcolor",
  }
  
class pixelcolor extends HTMLElement {
    divcolor?:string;


    static get observedAttributes() {
        const key: Record <colorDiv,null> = {
            divcolor:null
        }
        return Object.keys(key);
    }
  
    attributeChangedCallback(propName: colorDiv, oldValue: string |  string, newValue: string | string) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
    }}
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
      this.render()
    }
  
    render(){
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML=`
            <link rel="stylesheet" href="./colores.css">
            <div class="${this.divcolor}"></div>
            `}
    }}

    customElements.define("pixelcolor-cantainer",pixelcolor)
    export default pixelcolor