import { render } from "react-dom";
import { Counter } from "./components/Counter";

render (
    <div>
        First component
        <Counter/>
    </div>,
    document.getElementById('root')
)