function isValid(s: string): boolean {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };

    for (const ch of s) {
        if ('([{'.includes(ch)) {
            stack.push(ch);
        } else {
            if (stack.pop() !== map[ch]) return false;
        }
    }

    return stack.length === 0;
};