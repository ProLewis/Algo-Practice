// Tests for if something is a triangle (uses triangle inequality theorum)
function isTriangle(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) return false;
    else return true;
}