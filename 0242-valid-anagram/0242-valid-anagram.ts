function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const count: Record<string, number> = {};

    for (const char of s) {
        count[char] = (count[char] ?? 0) + 1;
    }

     for (const char of t) {
        if (!count[char]) return false; // 해당 문자가 없거나 이미 다 소모됨
        count[char]--;
    }

    return true;
};