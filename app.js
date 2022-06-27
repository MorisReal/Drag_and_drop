const box = document.querySelectorAll(".box");
const item = document.querySelectorAll(".item");

// dragstart, dragend -> item

for(let i=0; i < item.length; i++) {
    item[i].addEventListener("dragstart", (event) => {
        //console.log("dragstart", event.target)
        DragElement = event.target;
        DragElement.style.opacity=0.3
    });

    item[i].addEventListener("dragend", (event) => {
        //console.log("dragend")

        DragElement.style.opacity = 1
        DragElement=null;
    });
}

for(let i=0; i<box.length; i++){
    box[i].addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    box[i].addEventListener("dragenter", (event) => {
        event.preventDefault();
    });
    
    box[i].addEventListener("drop", () => {
        box[i].append(DragElement); 
    })
}
