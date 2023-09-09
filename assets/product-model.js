class ProductModel extends HTMLElement {
    constructor() {
        super();
        this.openModelModal();
    }

    getMediaID() {
        const id = this.getAttribute('data-media-id');
        return id;
    }

    getModal() {

    }

    openModelModal() {
        console.log("The element is working correctly.");
        const mediaID = this.getMediaID();
        const modal = this.getModal();
        console.log(mediaID);
    }
}

const ProductModel = customElements.define('product-model', ProductModel);