function longestWord (sentence) {
    
    const words = sentence.split(' ');
    let longest = '';

    words.forEach(word => {

        if (word.length > longest.length) {
            longest = word;
        }        
    });

    return longest;
}


console.log(longestWord('i love you, dears'));
