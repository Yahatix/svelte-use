export type hoverhHandlerFn = (state: "entered"|"left") => void

export default (node: HTMLElement, handler?: hoverhHandlerFn) => {
    const intHandler = (e: MouseEvent) => {
        handler(e.type === "mouseenter" ? "entered" : "left")
    }

    node.addEventListener("mouseenter", intHandler)
    node.addEventListener("mouseleave", intHandler)

    return {
        destroy() {
            node.removeEventListener("mouseenter", intHandler)
            node.removeEventListener("mouseleave", intHandler)
        }
    }
}