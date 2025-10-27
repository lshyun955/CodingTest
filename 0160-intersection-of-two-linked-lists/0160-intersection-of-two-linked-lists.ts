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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) return null;

    let currentNodeA: ListNode | null = headA;
    let currentNodeB: ListNode | null = headB;

    while (currentNodeA !== currentNodeB) {
        currentNodeA = currentNodeA ? currentNodeA.next : headA;
        currentNodeB = currentNodeB ? currentNodeB.next : headB;
    }

    return currentNodeA;
};