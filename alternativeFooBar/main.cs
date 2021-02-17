using System.Threading;
public class FooBar
{
    private readonly int n;
    volatile int foo = 0;
    volatile int bar = 1;
    SpinWait spinWait = new SpinWait();

    public FooBar(int n)
    {
        this.n = n;
    }

    public void Foo(Action printFoo)
    {
        for (int i = 0; i < n; i++)
        {
            while (Interlocked.CompareExchange(ref foo, 1, 0) != 0) {spinWait.SpinOnce();}
            printFoo();
            Interlocked.Exchange(ref bar, 0);
        }
    }

    public void Bar(Action printBar)
    {
        for (int i = 0; i < n; i++)
        {
            while (Interlocked.CompareExchange(ref bar, 1, 0) != 0) {spinWait.SpinOnce();}
            printBar();
            Interlocked.Exchange(ref foo, 0);
        }
    }
}