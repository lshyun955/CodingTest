function isAnagram(s: string, t: string): boolean {
    return s.split('').sort((a,b)=> a.charCodeAt(0)- b.charCodeAt(0)).join('') === t.split('').sort((a,b)=> a.charCodeAt(0)- b.charCodeAt(0)).join('');
};