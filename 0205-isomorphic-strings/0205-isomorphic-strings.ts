function isIsomorphic(s: string, t: string): boolean {
    let temp: string = '';
    const charMap = {};

    for (let i = 0; i < s.length; i++) {
        if (Object.values(charMap).includes(t.charCodeAt(i))) {
            continue;
        }
        charMap[s[i]] = t.charCodeAt(i);
    }
    
    for (let i = 0; i < s.length; i++) {
        temp += String.fromCharCode(charMap[s[i]]);
    }
    
    return t === temp;
};