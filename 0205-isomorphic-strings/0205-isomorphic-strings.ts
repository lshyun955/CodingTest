function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const mapST: Record<string, string> = {};
    const usedT: Record<string, boolean> = {};

    for (let i = 0; i < s.length; i++) {
        const a = s[i];
        const b = t[i];

        if (mapST[a] !== undefined) {
        // 이미 매핑이 있으면 일관성 검사
            if (mapST[a] !== b) return false;
        } else {
        // 매핑이 없으면 b가 이미 다른 문자에 의해 사용되었는지 검사
            if (usedT[b]) return false;
            mapST[a] = b;
            usedT[b] = true;
        }
    }

    return true;
};