function wordPattern(pattern: string, s: string): boolean {
    const sSplit = s.split(' ');
    if (sSplit.length !== pattern.length) return false;

    const mapST: Record<string, string> = {};
    const usedT = new Map<string, boolean>();

    for (let i = 0; i < sSplit.length; i++) {
        const a = sSplit[i];
        const b = pattern[i];
        if (mapST[b] !== undefined) {
            if (mapST[b] !== a) return false;
        } else {
            if (usedT.get(a)) return false;
            mapST[b] = a;
            usedT.set(a, true);
        }
    }

    return true;
};