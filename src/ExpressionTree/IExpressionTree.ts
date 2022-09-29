import INode from "../Node/INode";

export default interface IExpressionTree {
    toString(node: INode): string,
    result(node: INode): number
}