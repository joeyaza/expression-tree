export default interface INode {
  operator: string,
  value: number | null,
  left: INode | null,
  right: INode | null
}