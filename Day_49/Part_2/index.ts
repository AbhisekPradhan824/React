class Super {
  public Name = "TV";
  private Price = 45000;
  protected Stock = true;
}
class Derived extends Super {
  public Print(obj: Derived): void {
    obj.Stock;
    obj.Name;
  }
}
let obj = new Derived();
