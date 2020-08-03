// The class defines your web component. It must extend HTMLElement, which is a
// native class provided by the browser.
class TextBlink extends HTMLElement {
    // This function will be automatically called by the browser when the element
    // is connected to the page. You don't have access to the dom before this point!
    connectedCallback() {
        this.timer = setInterval(this.toggleVisibility.bind(this), 1000);
    }

    toggleVisibility() {
        // `this` refers to this HTMLElement. It has all the usual properties, so we will
        // modify its style to make it blink
        this.style.visibility =
            this.style.visibility === "hidden" ? "visible" : "hidden";
    }

    // also called automatically by the browser when the node is detached from the page.
    // This may happen on removal, but also if you move the node to somewhere else.
    disconnectedCallback() {
        // Cleanup: we clear our interval, else it will continue even if the node got detached!
        clearInterval(this.timer);
    }
}

// This is where we declare our new element: pass it the tag name, in our case <text-blink> and
// the class that defined this element.
customElements.define("text-blink", TextBlink);
