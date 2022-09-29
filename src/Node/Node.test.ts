import Node from './Node';

describe("Node", () => {

    describe("when instantiated with constructor properties", () => {

        const node = new Node("", 6, null, null);

        it("should add constructor properties to instance", () => {
    
            expect(node.operator).toEqual("");
            expect(node.value).toEqual(6);
            expect(node.left).toEqual(null);
            expect(node.right).toEqual(null);

        });
    
    });

    describe("when instantirated with incorrect properties", () => {

        it("should throw error", () => {
    
            expect(() => {
                new Node("*", 6, null, null)
              }).toThrow("Node is not created correctly, please check parameters");

        });


    });

});