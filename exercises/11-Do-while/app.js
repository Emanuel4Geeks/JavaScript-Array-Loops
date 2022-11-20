let i = 20;

do {
    // Magic goes here;
    let text = i;

    if (i % 5 == 0) {
        text += "!";
    }

    console.log(text);

    i--;
} while (i > 0);

console.log("LIFTOFF");
