// Реализация очереди через массив
// Класс ArrayQueue должен имплементировать интерфейс Queue
// Класс может работать с любым типом данных, то есть помещать любые данные в массив  <-- Важно
// Очередь - это структура данных, которая выглядит как реальная очередь в магазине
// Первый, кто подошел к прилавку, первым и уйдет. Так же и в коде при выполнении задач
// Чуть подробнее можно найти в википедии или на других сайтах по поиску "Очередь структура данных"
var ArrayQueue = /** @class */ (function () {
    function ArrayQueue() {
        this.queueArr = [];
        // Создать приватное свойство queue, которое по умолчанию массив и содержит массив любого типа
        // Подсказка по методам:
        // при добавлении в очередь можно выполнить метод push
        // при удалении - shift, так как нужно удалить первый элемент.
        // Обратите внимание на возвращаемое значение
        // isEmpty может использоваться в других методах
    }
    ArrayQueue.prototype.enqueue = function (item) {
        this.queueArr.push(item);
        console.log(this.queueArr);
    };
    ArrayQueue.prototype.dequeue = function () {
        if (this.queueArr.length > 0) {
            this.queueArr.shift();
            console.log(this.queueArr);
            return this.queueArr;
        }
        console.log(this.queueArr, 'is empty');
        throw new Error('Array is empty');
    };
    return ArrayQueue;
}());
// Стэк - это еще одна структура данных. Проще всего её представить как стопку листов на столе
// Последний, который вы положите сверху, вы и первым потом возьмете.
// Чуть подробнее можно найти в википедии или на других сайтах по поиску "Стэк структура данных"
// Класс Stack содержит другие методы, так что ничего имплементировать не нужно
// Класс может работать с любым типом данных, то есть помещать любые данные в массив и содержит массив любого типа  <-- Важно
var Stack = /** @class */ (function () {
    // Создать приватное свойство stack, которое по умолчанию массив и содержит массив любого типа
    // Создать приватное свойство limit, которое будет типом number
    // Здесь мы установим лимит на стопку листов.
    // При переполнении стэка программа зависает, а очень высокая стопка листов падает
    // Так что лимит всегда должен быть
    function Stack(limit) {
        if (limit === void 0) { limit = Number.MAX_VALUE; }
        this.stack = [];
        this.limit = limit;
    }
    Stack.prototype.push = function (value) {
        // Добавляет элемент в стэк
        // Если стэк переполнен - выбрасывает ошибку (throw new Error)
        if (this.stack.length >= this.limit) {
            console.log('Stack overflow');
            throw new Error('Stack over the limit');
        }
        else {
            this.stack.push(value);
        }
        console.log(this.stack);
    };
    Stack.prototype.pop = function () {
        // Удаляет последний элемент массива
        // Если в стеке пусто - выбрасывает ошибку (throw new Error)
        // При удалении элемента возвращает его
        // Простыми словами: вы берете верхний лист в стопке и используете его
        // Если на столе нет листов - получается ошибка, брать нечего
    };
    Stack.prototype.length = function () {
        // Возвращает кол-во элементов в стэке
    };
    Stack.prototype.isEmpty = function () {
        // Проверяет стэк на "пустоту"
    };
    Stack.prototype.top = function () {
        // Возвращает последний (верхний) элемент стэка, но не удаляет его
        // Вы просто читаете, что написано на верхнем листе
        // Если стэк пуст - вернется null
    };
    return Stack;
}());
// Для тестов
var arrTest1 = new ArrayQueue();
arrTest1.enqueue(5);
arrTest1.enqueue(10);
// console.log(arrTest1.peek());
console.log(arrTest1.dequeue());
// console.log(arrTest1.length());
var arrTest2 = new ArrayQueue();
arrTest2.enqueue('5');
arrTest2.enqueue('10');
// console.log(arrTest2.peek());
console.log(arrTest2.dequeue());
// console.log(arrTest2.length());
var stackTest1 = new Stack(10);
stackTest1.push(20);
stackTest1.push(50);
// console.log(stackTest1.top());
// console.log(stackTest1.pop());
// console.log(stackTest1.length());
// const stackTest2 = new Stack<string>(10);
// stackTest2.push('20');
// stackTest2.push('50');
// console.log(stackTest2.top());
// console.log(stackTest2.pop());
// console.log(stackTest2.length());
