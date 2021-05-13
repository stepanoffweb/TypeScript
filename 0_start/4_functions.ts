// перегрузка функции - разные return от количества параметров
interface IPosition {
    x: number | undefined
    y: number | undefined
}
interface IPositionDefault extends IPosition {
    default: string
}

function position(): IPosition
function position(a: number): IPositionDefault
function position(a: number, b: number): IPosition

function position(a?: number, b?: number) {
    if (!a && !b) {
        return {x: undefined, y: undefined}
    }
    if (a && !b) {
        return {x: a, y: undefined, default: a.toString()}
    }
    return {x: a, y: b}
}

console.log('Empty', position());// Empty { x: undefined, y: undefined }
console.log('One param', position(99));// One param { x: 99, y: undefined, default: '99' }
console.log('Two params', position(33, 56));// Two params { x: 33, y: 56 }
