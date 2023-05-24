import { Controller } from "@hotwired/stimulus"


export default class extends Controller<HTMLDivElement> {

    connect(): void {
        this.element.textContent = "TSTING"
    }
}