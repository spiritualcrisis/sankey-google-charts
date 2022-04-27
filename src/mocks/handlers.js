import { rest } from "msw";
import { INTIAL_EXPENSE_DATA } from "./data";

export const handlers = [
  rest.get("/api/getExpenseData", (req, res, ctx) => {
    return res(ctx.json(INTIAL_EXPENSE_DATA));
  }),
  rest.post("/addExpense", null),
];
