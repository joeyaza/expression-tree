import INode from "./INode";
import { TItem } from "./TItem";


export default class ANode implements INode {

  private numberRegex = /\d+/;
  private operatorRegex = /[\+\-__\(\)\*\/]/;

  constructor(public item: TItem, 
              public left: INode, 
              public right: INode) {

  }

  private itemIsNumber(item: TItem) {

    return typeof item === 'number';

 }
 
 private itemIsOperator(item: TItem) {

   if (!this.itemIsNumber(item)) {

      return false;

   }

   return this.operatorRegex.test(item as string);

 }

  public result() {

    const operators = {
      "+": "+",
      "-": "-",
      "x": "*",
      "÷": "/"
    }

    return this.itemIsOperator(this.item) ? 
              Function("return " + this.left.result() + operators[this.item] + this.right.result())() : 
              this.item;


  }

  public toString() {

    return this.item ? 
              `(${this.left.toString()} ${this.item} ${this.right.toString()})` : 
              this.item.toString();

  }

}
