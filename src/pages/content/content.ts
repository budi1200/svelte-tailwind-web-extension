import Content from "./Content.svelte";
import "@material-design-icons/font/outlined.css";
import "../../tailwind.css";
import "../../theme/theme.css";

window.onload = async () => {
    const container = document.createElement("div");
    document.documentElement.prepend(container);

    new Content({
        target: container,
    });
};
