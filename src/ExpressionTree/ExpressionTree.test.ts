import ExpressionTree from './ExpressionTree';
import Node from '../Node/Node';

describe("ExpressionTree", () => {

    const expressionTree = new ExpressionTree(new Node(
        "÷",
        null,
        new Node(
          "+",
          null,
          new Node("", 7, null, null),
          new Node(
            "x",
            null,
            new Node("-", null, new Node("", 3, null, null), new Node("", 2, null, null)),
            new Node("", 5, null, null)
          )
        ),
        new Node("", 6, null, null)
      )
    );

    describe("when result function is called on expression tree", () => {

        it("should execute expression and return result", () => {
    
            expect(expressionTree.result()).toEqual(2);
    
        });
    
    });

    describe("when toString function is called on expression tree", () => {

        it("should return expression as string", () => {

            expect(expressionTree.toString()).toEqual("((7 + ((3 - 2) x 5)) ÷ 6)");

        });
    
    });

});