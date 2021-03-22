

const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateWord = (symbols, length) => {
    let word = [];
    for(let i = 0; i < length; i++){
        word.push(symbols[rand(0, symbols.length - 1)])
    }
    return word;
};

export function generator(symbols, length, maxWordLength = 10){


    let text = [];
    const space = ' ';

    while(text.length < length){

        let l = rand(1,maxWordLength);
        if(l === 1 && maxWordLength > 1 && rand(0,10) < 7){
            l = rand(2,maxWordLength);
        }
        text = text.concat(generateWord(symbols, l));
        text.push(space);

    }

    return text.slice(0, length);

}