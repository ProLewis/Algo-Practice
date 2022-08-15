function disemvowel(str) {
    //Reg Ex expression, searches for upper and lowercase vowels and changes them into empty spaces.
    return str.replace(/[aeiouAEIOU]/g, "");
}