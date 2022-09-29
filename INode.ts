import { TItem } from "./TItem";

export default interface INode {
  item: TItem,
  left: INode,
  right: INode,
  result(),
  toString()
}