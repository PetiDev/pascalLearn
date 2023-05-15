let codes = document.querySelectorAll("code");

codes.forEach(code => {
    let formatedHTML = "";

    let lines = code.innerText.split('\n');
    lines.forEach(line => {
        formatedHTML += "<br>";
        let dontHightlithChar = false;
        let dontHightlithCharColor = "red";

        let words = line.split(/(\s){1,4}/);
        words.forEach(word => {
            let needChar = false;
            switch (word.toLowerCase()) {
                case "":
                    formatedHTML += `<span tab> </span>`
                    break;

                case "integer;":
                case "string;":
                case ":integer;":
                case ":string;":
                case ":array":
                    formatedHTML += `<span style="color: lightblue">${word}</span>`;
                    break;

                case word.toLowerCase().match(/:array\[.+\]/)?.input:
                    formatedHTML += `<span style="color: lightblue">${word.slice(0, 6)}</span>`
                    word = word.slice(6)
                    needChar = true;
                    break;

                case "begin":
                case "end;":
                case "end.":
                    formatedHTML += `<span style="color: red">${word}</span>`;
                    break;

                case "var":
                case "while":
                case "for":
                case "repeat":
                case "until":
                case "true":
                case "false":
                    formatedHTML += `<b>${word}</b>`
                    break;

                default:
                    needChar = true
                    break;
            }
            if ((word != "" || word != " ") && needChar) {


                word.split("").forEach(char => {
                    switch (char.toLowerCase()) {
                        case "'":
                            dontHightlithChar = !dontHightlithChar;
                            dontHightlithCharColor = "crimson";
                            
                            formatedHTML += `<span style="color: red">${char}</span>`;
                            break;
                        case "+":
                        case "=":
                        case ":":
                        case "/":
                        case "*":
                        case "+":
                        case "-":
                        case "<":
                        case ",":
                        case ">":
                        case ";":
                            if (dontHightlithChar) {
                                formatedHTML += `<span style="color: ${dontHightlithCharColor}">${char}</span>`;
                            } else {
                                formatedHTML += `<span style="color: lightblue">${char}</span>`
                            }
                            break;
                        case "(":
                        case ")":
                        case "[":
                        case "]":

                            if (dontHightlithChar) {
                                formatedHTML += `<span style="color: ${dontHightlithCharColor}">${char}</span>`;
                            } else {
                                formatedHTML += `<span style="color: lightgreen">${char}</span>`
                            }
                            break;
                        case char.match(/\d/)?.input:
                            formatedHTML += `<span style="color: pink">${char}</span>`

                            break;

                        default:
                            if (dontHightlithChar) {
                                formatedHTML += `<span style="color: ${dontHightlithCharColor}">${char}</span>`;

                            } else {
                                formatedHTML += char;

                            }
                            break;
                    }
                })
            }

        });

    });

    code.innerHTML = formatedHTML;
});

//menü bezárása ha kattint
const menuCheck = document.getElementById("menuCheck")
document.addEventListener("mousedown", ()=>{
    if (menuCheck.checked) {
        menuCheck.checked = false;
    }
})
document.addEventListener("touchstart", ()=>{
    if (menuCheck.checked) {
        menuCheck.checked = false;
    }
})


//vissza a tetejére
const scrollTop = document.getElementById("scrollTop")
document.addEventListener("scroll",()=>{
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        console.log("asd");
        scrollTop.style.display = "block";
    }else{
        scrollTop.style.display = "none";
    }

})
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }