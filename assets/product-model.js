class ProductModel extends HTMLElement {
    constructor() {
        super();
        this.openModelModal();
    }

    openModelModal() {
        console.log("The element is working correctly.");
    }
}

const ProductModel = customElements.define('product-model', ProductModel);