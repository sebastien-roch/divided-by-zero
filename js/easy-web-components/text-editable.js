class TextEditable extends HTMLElement {
    // Your element is being constructed. It is not connected to the page yet!
    // It will also be called when you use `document.createElement`
    constructor() {
        // you must call super(). The browser will remind you if you don't ;-)
        super();
        // We prepare the shadow dom so that all the inner elements are private
        // and don't interfere with the page
        this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        // populate our shadow dom with our style and html
        this.shadow.innerHTML = `
            <style>${this.getStyle()}</style>
            ${this.getHtml()}
        `;
        // keep a reference of the main elements in the html
        this.span = this.shadow.querySelector("span");
        this.input = this.shadow.querySelector("input");
        this.div = this.shadow.querySelector("div");

        // Add listeners to the different elements
        this.span.addEventListener(
            "click",
            (this.onTextClickedListener = this.onTextClicked.bind(this))
        );
        // whenever we leave the field, we will switch back to normal mode.
        this.input.addEventListener(
            "blur",
            (this.onInputBlurListener = this.onInputBlur.bind(this))
        );
        // whenever we leave the field, we will switch back to normal mode.
        this.input.addEventListener(
            "keyup",
            (this.onKeyPressListener = this.onKeyPress.bind(this))
        );
    }

    onTextClicked() {
        this.input.value = this.textContent;
        this.switchMode("edit");
    }

    onInputBlur() {
        this.switchMode("normal");
    }

    onKeyPress(e) {
        if (e.code === "Enter") {
            this.commitValue();
        } else if (e.code === "Escape") {
            this.switchMode("normal");
        }
    }

    commitValue() {
        this.textContent = this.input.value;
        this.dispatchEvent(new CustomEvent("update"));
        this.switchMode("normal");
    }

    switchMode(mode) {
        if (mode === "edit") {
            this.span.style.display = "none";
            this.div.style.display = "inline-block";
            this.input.focus();
        } else {
            this.span.style.display = "inline-block";
            this.div.style.display = "none";
        }
    }

    getHtml() {
        return `
            <span>
                <slot></slot>
            </span>
            <div>
                <input class="field"/>
            </div>
        `;
    }

    getStyle() {
        return `
            :host {
                cursor: pointer;
            }
            div {
                display: none;
            }
        `;
    }

    disconnectedCallback() {
        this.span.removeEventListener("click", this.onTextClickedListener);
        this.input.removeEventListener("blur", this.onInputBlurListener);
        this.input.removeEventListener("keyup", this.onKeyPressListener);
    }
}
customElements.define("text-editable", TextEditable);
