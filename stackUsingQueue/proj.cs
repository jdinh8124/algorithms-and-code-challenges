public class MyStack {
    private Queue<int> stack;

    /** Initialize your data structure here. */
    public MyStack() 
    {
        stack = new Queue<int>();
    }
    
    /** Push element x onto stack. */
    public void Push(int x)   
    {
        stack.Enqueue(x);
        
        for (int i=0; i < stack.Count - 1; i++) 
        {
            stack.Enqueue(stack.Dequeue());
        }
    }
    
    /** Removes the element on top of the stack and returns that element. */
    public int Pop() 
    {
        return stack.Dequeue();
    }
    
    /** Get the top element. */
    public int Top() {
        return stack.Peek();
    }
    
    /** Returns whether the stack is empty. */
    public bool Empty() {
        return stack.Count == 0;
    }
}