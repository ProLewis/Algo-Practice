function solution(string) {
    for(let i= 0; i < string.length - 1; i++) {
        if (string[i+1] == string[i+1].toUpperCase()) {
            console.log(string[i+1]);
            string = string.substring(0, i+1) + " " + string.substring(i+1);
            i++;
        }
    }
    return string;
}

console.log(solution("helloWorld"));