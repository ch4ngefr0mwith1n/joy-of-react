import { createRoot } from "react-dom/client";

const daysUntilSantaReturns = 123;

const element = (
    <div>
        <strong>Days until Santa returns:</strong>
        {/* ukoliko želimo da dodamo whitespace,onda to moramo da odradimo preko "{...}" zagrada (JavaScript izraz)  */}
        {" "}
        {daysUntilSantaReturns}
    </div>
);

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(element);
