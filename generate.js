import { generate } from "@common-module/static-site-generator";
import index from "./dist/pages/index.js";
import savings from "./dist/pages/legacy/savings.js";

await generate({
  "docs/index.html": index(),
  "docs/legacy/savings.html": savings(),
});
