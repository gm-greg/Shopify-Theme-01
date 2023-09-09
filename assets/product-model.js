class ProductModel extends HTMLElement {
    constructor() {
        super();
        this.openModelModal();
    }

    getMediaID() {

    }

    getModal() {

    }

    openModelModal() {
        console.log("The element is working correctly.");
        const mediaID = this.getMediaID();
        const modal = this.getModal();
    }
}

const ProductModel = customElements.define('product-model', ProductModel);