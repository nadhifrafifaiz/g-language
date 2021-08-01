bahasaG = () => {
    let normal = document.getElementById("normal").value;

    normalArr = normal.split("");

    var answer = [];
    normalArr.map((val, index) => {
        let vowel = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"];

        if (vowel.includes(val)) {
            answer.push(`${val}g${val}`)
        } else {
            answer.push(val)
        }
    })
    console.log(answer);
    document.getElementById("answer").innerHTML = answer.join("");
}
