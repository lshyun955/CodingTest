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
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }
// 1 2 3 2 1
    if (fast !== null) {
        slow = slow.next;
    }

    while (slow !== null) {
        if (stack.pop() !== slow.val) return false;
        slow = slow.next;
    }

    return true;
};