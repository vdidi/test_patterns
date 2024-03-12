import Purchase from "../src/domain/Purchase"

test("Deve criar um objeto da classe Purchase", function (){
    const value = Math.round(Math.random() * 1000 * 10) / 10;
    const purchase = Purchase.create(value);

    expect(purchase).toBeDefined();
    expect(purchase.purchaseId).toBeDefined();
    expect(purchase.value).toBe(value);
    expect(purchase.date).toBeDefined();
});
