import './App.css';

function App() {

    // N1
    function sum (num) {
        let sum = 0;
        for(let i = 0; i <= num; i++) {
            sum += i
        }
        console.log(sum)
    }
    // sum(10)

    // N2
    function evenNum (num) {
        for(let i = 1; i <= num; i++) {
            if (i % 2 === 0) console.log(i)
        }
    }
    // evenNum(5)

    // N3
    const arr = [1, 5, 3, 6, 7, 1]
    function biggestNum (arr) {
        let res = arr[0]
        for(let i = 1; i < arr.length; i++) {
            if (arr[i] > res) res = arr[i]
        }
        console.log(res)
    }
    // biggestNum(arr)

    // N4
    const str = 'Hello world!'
    function vowels (str) {
        for(let i = 0; i < str.length; i++) {
            if(str[i] === 'a' || str[i] === 'o' || str[i] === 'u' || str[i] === 'e') {
                console.log(str[i])
            }
        }
    }
    // vowels(str)

    // N5
    const numbers = [-2, 0, 3, -5, 7, -8];
    function positiveNum (arr) {
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                console.log(arr[i])
                break;
            }
        }
    }
    // positiveNum(numbers)

    // N6
    let cart = [
        { 
            name: 'Молоко', 
            price: 2.5, 
            quantity: 2 
        }, 
        { 
            name: 'Хлеб', 
            price: 1.5, 
            quantity: 3 
        }, 
        { 
            name: 'Яблоки', 
            price: 1, 
            quantity: 5 
        } 
    ];
    function totalCost (arr) {
        let sum = 0;
        for(let i = 0; i < arr.length; i++) {
            sum += arr[i].price
        }
        console.log(sum)
    }
    // totalCost(cart)

    // N7
    let users = [ 
        { 
            id: 1, 
            name: 'Alice' 
        }, 
        { 
            id: 2, 
            name: 'Bob' 
        }, 
        { 
            id: 3, 
            name: 'Charlie' 
        } 
    ];
    function findUser(arr, id) {
        for(let i = 0; i < arr.length; i++) {
            if (arr[i].id === id) console.log(arr[i])
        }
    }
    // findUser(users, 1)

    // N8 
    let students = [ 
        { 
            name: 'Alice', 
            score: 85 
        }, 
        { 
            name: 'Bob', 
            score: 92 
        }, 
        { 
            name: 'Charlie', 
            score: 78 
        }, 
        { 
            name: 'David', 
            score: 95 
        } 
    ];
    function filter(arr) {
        for(let i = 0; i < arr.length; i++) {
            if (arr[i].score > 90) console.log(arr[i])
        }
    }
    // filter(students)

}

export default App;