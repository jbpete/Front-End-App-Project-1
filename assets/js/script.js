var entry = document.getElementById("entry");
var saveButton = document.getElementById("save");
console.log(saveButton)
saveButton.addEventListener("click", function(event) {
    event.preventDefault();

    var journal = {
        entry: entry.value.trim(),

    };


    localStorage.setItem("journal", JSON.stringify(journal));
    console.log("Hello")
});
