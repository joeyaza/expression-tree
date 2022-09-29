import ANode from './ExpressionTree';

describe("ExpressionTree", () => {

    const tree = new ANode(
        "÷",
        new ANode(
            "+",
            new ANode(7, null, null),
            new ANode(
            "x",
            new ANode("-", new ANode(3, null, null), new ANode(2, null, null)),
            new ANode(5, null, null)
            )
        ),
        new ANode(6, null, null)
        );

    describe("when result function is called on expression tree", () => {

        it("should execute expression and return result", () => {

            console.log(tree)
    
            expect(tree.result()).toEqual(2);
    
        });
    
    });

    describe("when toString function is called on expression tree", () => {

        it("should return expression as string", () => {

            expect(tree.toString()).toEqual("((7 + ((3 - 2) x 5)) ÷ 6)");

        });
    
    });

});