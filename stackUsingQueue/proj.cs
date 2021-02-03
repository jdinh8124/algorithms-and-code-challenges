public class MyStack {
    private Queue<int> stack;
    private Queue<int> stack2;

    /** Initialize your data structure here. */
    public MyStack() {
        stack = new Queue<int>();
        stack2 = new Queue<int>();
    }
    
    /** Push element x onto stack. */
    public void Push(int x) {
        while (stack.Count != 0) {
            stack2.Enqueue(stack.Dequeue());
        }
        
        stack.Enqueue(x);
        
        while (stack2.Count != 0) {
            stack.Enqueue(stack2.Dequeue());
        }
    }
    
    /** Removes the element on top of the stack and returns that element. */
    public int Pop() {
        int temp = 0;
        while (stack.Count != 0) {
            stack2.Enqueue(temp);
        }
        
        temp = stack2.Dequeue();
        
        while (stack2.Count != 0) {
            stack.Enqueue(stack2.Dequeue());
        }
        
        return temp;
    }
    
    /** Get the top element. */
    public int Top() {
        int temp = 0;
        Queue<int> stack2 = new Queue<int>();
        while (stack.Count != 0) {
            temp = stack.Dequeue();
            stack2.Enqueue(temp);
        }
        
        while (stack2.Count != 0) {
            stack.Enqueue(stack2.Dequeue());
        }
        
        return temp;
    }
    
    /** Returns whether the stack is empty. */
    public bool Empty() {
        return stack.Count == 0;
    }
}
