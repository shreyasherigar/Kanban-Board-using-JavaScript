import KanbanAPI from "./api/KanbanAPI.js";
import Kanban from "./view/Kanban.js";

// console.log(KanbanAPI.insertItem(1, "I'm new!"))

// KanbanAPI.updateItem(582360, {columnId: 1, position: 0})

// KanbanAPI.deleteItem(582360)

new Kanban(document.querySelector('.kanban'))