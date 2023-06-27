import { rest } from "msw";
import { testuser, profile } from "./user";
import { testProduct, testMeal, testDiary } from "./items";
import { createToken } from "./token";
export const handlers = [
  // user
  rest.post(
    "https://web-production-a61c.up.railway.app/user/signup",
    (req, res, ctx) => {
      const token = createToken();

      localStorage.setItem("profile", JSON.stringify({ credential: token }));

      return res(
        ctx.status(200),
        ctx.json({
          user: testuser,
          token,
        }),
        ctx.delay(150)
      );
    }
  ),

  rest.post(
    "https://web-production-a61c.up.railway.app/user/signin",
    (req, res, ctx) => {
      const token = createToken();

      localStorage.setItem("profile", JSON.stringify({ credential: token }));

      return res(
        ctx.status(200),
        ctx.json({
          user: testuser,
          token,
        }),
        ctx.delay(150)
      );
    }
  ),

  rest.patch(
    "https://web-production-a61c.up.railway.app/user/userData/testuserID",
    (req, res, ctx) => {
      const token = createToken();

      localStorage.setItem("profile", JSON.stringify({ credential: token }));

      return res(
        ctx.status(200),
        ctx.json({
          user: { name: "testuseredited", email: "testuseredited@gmail.com" },
          token,
        }),
        ctx.delay(150)
      );
    }
  ),

  rest.patch(
    "https://web-production-a61c.up.railway.app/user/profile/testuserID",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          ...profile,
        }),
        ctx.delay(150)
      );
    }
  ),

  // products
  rest.get(
    "https://web-production-a61c.up.railway.app/products",
    (req, res, ctx) => {
      return res(ctx.json([]), ctx.status(200), ctx.delay(150));
    }
  ),

  rest.post(
    "https://web-production-a61c.up.railway.app/products",
    (req, res, ctx) => {
      return res(ctx.json(testProduct), ctx.status(200), ctx.delay(150));
    }
  ),

  // meals
  rest.get(
    "https://web-production-a61c.up.railway.app/meals",
    (req, res, ctx) => {
      return res(ctx.json([]), ctx.status(200), ctx.delay(150));
    }
  ),

  rest.post(
    "https://web-production-a61c.up.railway.app/meals",
    (req, res, ctx) => {
      return res(ctx.json(testMeal), ctx.status(200), ctx.delay(150));
    }
  ),

  // diaries
  rest.get(
    "https://web-production-a61c.up.railway.app/diaries",
    (req, res, ctx) => {
      return res(ctx.json([]), ctx.status(200), ctx.delay(150));
    }
  ),

  rest.post(
    "https://web-production-a61c.up.railway.app/diaries",
    (req, res, ctx) => {
      return res(ctx.json(testDiary), ctx.status(200), ctx.delay(150));
    }
  ),

  rest.patch(
    "https://web-production-a61c.up.railway.app/diaries/testdiaryID",
    (req, res, ctx) => {
      return res(
        ctx.json({ ...testDiary, title: "testdiaryupdated" }),
        ctx.status(200),
        ctx.delay(150)
      );
    }
  ),

  rest.delete(
    "https://web-production-a61c.up.railway.app/diaries/testdiaryID",
    (req, res, ctx) => {
      return res(ctx.json(testDiary), ctx.status(200), ctx.delay(150));
    }
  ),

  rest.patch(
    "https://web-production-a61c.up.railway.app/diaries/rate/testdiaryID",
    (req, res, ctx) => {
      return res(ctx.json(testDiary), ctx.status(200), ctx.delay(150));
    }
  ),

  // other
  rest.get("*", (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ errod: "Please add request handler" })
    );
  }),
];
