# Expression Tree

I split the given code into some seperate classes.

### [Node](src/Node/Node.ts)

- has a check to make sure if operator is supplied as a param, number is null and vice versa as a Node can only have an operator or a number as a value.
- there are a number of other checks that could be included to make sure the parameters of the Node are correctly given. Such as checking the value param is either a number or null, or the leftNode value is either a Node or null, however the TypeScript checking and interface looks after this. 

### [ExpressionTree](src/ExpressionTree/ExpressionTree.ts)

- this holds the logic to print the tree to string and also execute its result and takes a Node in the constructor
- I used Function function in the result function to use a strategy pattern to find the operator and not have to use a switch statement or if-else. Eval could also be used but is far more unsafe. If Function cannot be used here, an if-else or switch would need to be reinstated.

### Caveats

- I removed the assertionss in the given code, I know it said otherwise but they have been carbon copied into the ExpressionTree tests in [ExpressionTree.test.ts](src/ExpressionTree/ExpressionTree.test.ts), to work better with the structure I added.

### Furthering

- I thought it might be interesting to add a toJson function to similarly print the json version of the expression tree.

### Tests

    npm test



