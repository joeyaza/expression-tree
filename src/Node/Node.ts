import INode from "./INode";

export default class Node implements INode {

    constructor(public operator: string,
        public value: number | null,
        public left: INode | null, 
        public right: INode | null) {

            if (this.isNodeCreatedCorrectly(operator, value)) {

                throw new Error("Node is not created correctly, please check parameters");

            }

        }

        private isNodeCreatedCorrectly(operator: string, value: number | null): Boolean {

            return !!((value && operator !== "") || (!value && operator.length === 0))

        }

}