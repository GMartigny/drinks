import test from "ava";
import drinks from ".";

test("all", (t) => {
    const list = drinks();

    list.forEach(({name, min, max}) => {
        t.true(typeof name === "string" && name.length > 0);
        t.true(typeof min === "number" && typeof max === "number");
        t.true(min <= max);
    });
});
