
class TestClass {
    public foo: string | undefined;
    public foo1: string | undefined;
    public bar: string = 'Test';
    public foo2: number | undefined;
}

it('Testing object methods', () => {
    expect('test').toEqual('test');
    expect('test').toEqual('test');

    let obj = new TestClass();
    console.log(obj);
});
