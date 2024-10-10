// Створіть змінну, яка може містити або рядок, або число (union type).
// Також, оголосіть змінну, яка може містити лише одне з двох можливих
// рядкових значень: 'enable' або 'disable' (literal type).


let value: string | number;
value = "string";
value = 123;


type status = "enable" | "disable";
let newValue: status;
newValue = "enable";
newValue = "disable";

