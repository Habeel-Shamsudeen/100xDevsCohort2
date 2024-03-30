import { Hono} from "hono";
import { getPostByTag } from "../controller/tagController";

export const tagRouter = new Hono();

tagRouter.get("/",getPostByTag);