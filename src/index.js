import './styles/sstyle.css'
import loadPage from "./todo.js";

function pages(page){
    if (page === "todo") loadPage();
}

pages("todo");