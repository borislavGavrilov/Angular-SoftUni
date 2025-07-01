class GenericBox<T> {

    private boxes: T[] = [];

    add(element: T): void {
        this.boxes.push(element);
    }

    remove(): T | undefined {
        return this.boxes.pop();
    }

    get count(): number {
        return this.boxes.length;
    }
}

// Example usage:
const myStringBox = new GenericBox<string>();  
myStringBox.add("Hello");
myStringBox.add("World"); 
console.log(myStringBox.count); // Output: 2
console.log(myStringBox.remove()); // Output: World   