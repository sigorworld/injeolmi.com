import { generate } from "@common-module/static-site-generator";
import index from "./dist/pages/index.js";
import savings from "./dist/pages/legacy/savings.js";

await generate({
  "public/index.html": index(),
  "public/legacy/savings.html": savings(),
});
