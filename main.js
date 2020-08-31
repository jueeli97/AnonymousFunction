// Anonymous Function

(
    (
        function () {
            console.log("Anonymous Function");
        }
    )
)(); // Anonymous Function



let output = (
    (
        function (strName) {
            return strName;
        }
    )
)("Anonymous");

console.log(output); // Anonymous
