// Створіть змінну, яка може містити або рядок, або число (union type)? Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type)

let gate: string | number;

gate = '13G';
gate = 13;


let enableDisable: 'enable' | 'disable';

enableDisable = 'enable';
enableDisable = 'disable';

export {}