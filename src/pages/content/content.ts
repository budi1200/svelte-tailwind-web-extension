import Content from "./Content.svelte";
import "../../tailwind.css";
import "../../theme/theme.css";

window.onload = async () => {
    const container = document.createElement("div");
    document.documentElement.prepend(container);

    new Content({
        target: container,
    });
};
