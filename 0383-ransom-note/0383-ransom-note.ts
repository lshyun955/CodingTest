function canConstruct(ransomNote: string, magazine: string): boolean {
    const ransomNoteMap = new Map<number, number>();

    for (let i = 0; i < ransomNote.length; i++) {
        const charCode = ransomNote.charCodeAt(i);
        if (ransomNoteMap.has(charCode)) {
            ransomNoteMap.set(charCode, ransomNoteMap.get(charCode) + 1);
        } else {
            ransomNoteMap.set(charCode, 1);
        }
    }
    
    for (let j = 0; j < magazine.length; j++) {
        const charCode = magazine.charCodeAt(j);
        
        if (ransomNoteMap.has(charCode) && ransomNoteMap.get(charCode) > 0) {
            ransomNoteMap.set(charCode, ransomNoteMap.get(charCode) - 1);
        }
    }
    
    // ransomNoteMap의 value가 모두 0인지 확인
    for (const value of ransomNoteMap.values()) {
        if (value > 0) return false;
    }
    return true;
};