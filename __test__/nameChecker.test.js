import { describe } from "yargs";
import { checkName } from "../src/client/js/nameChecker";

describe("Testing checkName function", () => {
    test("Testing checkName function", () => {
        expect(checkName).toBeDefined();
    })
});