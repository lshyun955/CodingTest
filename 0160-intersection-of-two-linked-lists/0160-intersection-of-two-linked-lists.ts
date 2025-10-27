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

    let currentNodeA = headA;
    let currentNodeB = headB;
    const seen = new Set<ListNode>();

    while (currentNodeA) {
        seen.add(currentNodeA);
        currentNodeA = currentNodeA.next;
    }

    while (currentNodeB) {
        if (seen.has(currentNodeB)) {
            return currentNodeB;
        }

        currentNodeB = currentNodeB.next;
    }

    return null;
};