class BSNode {
    constructor(value){
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
    insertNode(newVal) {
        if (this.value === undefined)
            this.value = newVal
        else if (newVal > this.value && this.rightChild != undefined)
            this.rightChild.insertNode(newVal)
        else if(newVal <= this.value && this.leftChild != undefined)
            this.leftChild.insertNode(newVal)
        else if (newVal <= this.value)
            this.leftChild = new BSNode(newVal)
        else
            this.rightChild = new BSNode(newVal)
    }
    findNode(newVal) {
    if (this.value === undefined)
        console.log(false);
    else if (newVal === this.value)
        console.log(true);
    else if (newVal < this.value && this.leftChild != null)
        return this.leftChild.findNode(newVal);
    else if (newVal > this.value && this.rightChild != null)
        return this.rightChild.findNode(newVal);
    else
        console.log(false);
    }
    findCommonParent(val1, val2) {
        if(this.value === undefined)
                return null;
        if (val1 < this.value && val2 < this.value) 
            return this.leftChild.findCommonParent(val1, val2);
        else if (val1 > this.value && val2 > this.value)
            return this.rightChild.findCommonParent(val1, val2);
        else
            return this.value;
    }

  removeNode(parent, value) {
    if (value < this.value && this.leftChild !== null) {
      return this.leftChild.removeNode(this, value);
    } else if (value > this.value && this.rightChild !== null) {
      return this.rightChild.removeNode(this, value);
    }
    
    if (value === this.value) {
    // Case 1: No children – simply remove the node from its parent
      if (!this.leftChild && !this.rightChild) {
        if (parent) {
          if (parent.leftChild === this) parent.leftChild = null;
          else if (parent.rightChild === this) parent.rightChild = null;
        }
        return this;
      }

    // Case 2: One child – replace the node with its child
      if (this.leftChild && !this.rightChild) {
        if (parent) {
          if (parent.leftChild === this) parent.leftChild = this.leftChild;
          else if (parent.rightChild === this) parent.rightChild = this.leftChild;
        }
        return this;
      } else if (!this.leftChild && this.rightChild) {
        if (parent) {
          if (parent.leftChild === this) parent.leftChild = this.rightChild;
          else if (parent.rightChild === this) parent.rightChild = this.rightChild;
        }
        return this;
      }
      
    // Case 3: Two children – replace current node's value with max from left subtree, then delete that max node
      let maxNode = this.leftChild;
      let maxParent = this;
      while (maxNode.rightChild !== null) {
        maxParent = maxNode;
        maxNode = maxNode.rightChild;
      }
      this.value = maxNode.value;
      
      if (maxParent.leftChild === maxNode) {
        maxParent.leftChild = maxNode.leftChild;
      } else {
        maxParent.rightChild = maxNode.leftChild;
      }
      return this;
    }

    return null;
  }

      //I took this "printTree" function from GPT for testing purposes :)
    printTree(node = this, prefix = "", isLeft = true) {
        if (node.rightChild !== null) {
            this.printTree(node.rightChild, prefix + (isLeft ? "│   " : "    "), false);
        }
        console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);
        if (node.leftChild !== null) {
            this.printTree(node.leftChild, prefix + (isLeft ? "    " : "│   "), true);
        }
    }
}

//Exercise 1
const letters = ["H", "E", "S", "G", "L", "Y", "I"]
let bSTree = new BSNode()
letters.forEach(l => bSTree.insertNode(l))
    
bSTree.findNode("H") // should print true
bSTree.findNode("G") // should print true
bSTree.findNode("Z") // should print false
bSTree.findNode("F") // should print false
bSTree.findNode("y") // should print false - we didn't make the tree case sensitive!


//Exercise 2
const letters2 = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]
let bSTree2 = new BSNode()
letters2.forEach(l => bSTree2.insertNode(l))

console.log(bSTree2.findCommonParent("B", "I")) //should return "H"
console.log(bSTree2.findCommonParent("B", "G")) //should return "E"
console.log(bSTree2.findCommonParent("B", "L")) //should return "J"
console.log(bSTree2.findCommonParent("L", "Y")) //should return "R"
console.log(bSTree2.findCommonParent("E", "H")) //should return "J"


//Exercise 3
const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied) 
    
let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5) 


