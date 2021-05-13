// перегрузка функции - разные return от количества параметров
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, "default": a.toString() };
    }
    return { x: a, y: b };
}
console.log('Empty', position());
console.log('One param', position(99));
console.log('Two params', position(33, 56));
