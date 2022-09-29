import INode from "../Node/INode";
import IExpressionTree from "./IExpressionTree";

export default class ExpressionTree implements IExpressionTree {

  constructor(private node: INode) {

  }

  public result(node: INode = this.node): number {

    const operators = {
      "+": "+",
      "-": "-",
      "x": "*",
      "÷": "/"
    };

    return node.operator ? 
              Function("return " + this.result(node.left) + operators[node.operator] + this.result(node.right))() : 
              node.value;


  };

  public toString(node: INode = this.node): string {

    return node.operator ? 
              `(${this.toString(node.left)} ${node.operator} ${this.toString(node.right)})` : 
              node.value.toString();

  };

};
