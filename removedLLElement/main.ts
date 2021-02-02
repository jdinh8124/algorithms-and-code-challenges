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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (head === null) {
        return null;
    }
    
    let temp = head.next;
    let previous = head;
    while (temp !== null) {
        if (temp.val === val) {
            previous.next = temp.next
            temp = temp.next
        } else {
            previous = temp;
            temp = temp.next
        }
    }
    
    if (head?.val === val) {
        head = head.next;
    }
    
    return head;
};