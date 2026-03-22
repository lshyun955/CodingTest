/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
    const stack: number[] = [];
    let currentNode: ListNode | null = head;

    while (currentNode !== null) {
        stack.push(currentNode.val);
        currentNode = currentNode.next;
    }

    let first = 0;
    let last = stack.length - 1;

    while (first < last) {
        if (stack[first] !== stack[last]) return false;

        first++;
        last--;
    }

    return true;
};