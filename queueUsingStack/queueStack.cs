public class MyQueue {
    private Stack<int> queue;
    
    /** Initialize your data structure here. */
    public MyQueue() {
        queue = new Stack<int>();
    }
    
    /** Push element x to the back of queue. */
    public void Push(int x) {
        int[] temp = queue.ToArray();
        queue.Clear();
        queue.Push(x);
        for (int i = temp.Length - 1; i >= 0; i--) {
            queue.Push(temp[i]);
        }
    }
    
    /** Removes the element from in front of queue and returns that element. */
    public int Pop() {
        return queue.Pop();
    }
    
    /** Get the front element. */
    public int Peek() {
        return queue.Peek();  
    } 
    
    /** Returns whether the queue is empty. */
    public bool Empty() {
        return queue.Count == 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.Push(x);
 * int param_2 = obj.Pop();
 * int param_3 = obj.Peek();
 * bool param_4 = obj.Empty();
 */

