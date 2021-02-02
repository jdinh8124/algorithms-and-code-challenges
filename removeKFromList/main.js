// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
  let previous;
  let valuetoCheck = l;
  while(valuetoCheck !== null) {
      if (valuetoCheck.value === k) {
          if (previous) {
              previous.next = valuetoCheck.next 
              previous = valuetoCheck;
              valuetoCheck = valuetoCheck.next;

          } else {
              l = valuetoCheck.next;
              valuetoCheck = l;
          }
      } else {
          previous = valuetoCheck;
          valuetoCheck = valuetoCheck.next;   
      }
  }
  return l;
}
