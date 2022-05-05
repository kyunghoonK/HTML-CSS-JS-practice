//let fruit1 = "banana"
//let fruit2 = "apple"
//let fruit3 = "grape"
//let fruit4 = "mango"

let fruit = ["banana", "apple", "grape", "mango"]

console.log(fruit)
console.log(fruit[3])

//pop() : 마지막에 있는 아이템을 뺌
fruit.pop()
console.log(fruit)
fruit.push("pineapple")
console.log(fruit)

//includes : 아이템이 있는지 없는지 확인
console.log(fruit.includes("pear"))

//indexOf : 아이템에 인덱스 번호 알려줌
console.log(fruit.indexOf("apple"))

//slice : 배열 아이템을 잘라내는 역할 (시작점, 끝점-끝점 미포함)
let extrafruit = fruit.slice(1,3)
console.log(extrafruit)
console.log("original fruit",fruit)

//splice : 배열 아이템을 잘라내는 역할 (시작점, 개수)
fruit.splice(0,2)
console.log(fruit)