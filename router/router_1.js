import express from "express";

// importing controller data
import { GetHome, GetAbout, GetReviews, GetContact, PostHome, deleteEntry } from "../Controllers/controller.js"

let router_1 = express()

router_1.get("/", GetHome).post("/", PostHome)
// user action update

// api route delete
router_1.post("/delete", deleteEntry)

router_1.get("/about", GetAbout)

router_1.get("/contact", GetContact)

router_1.get("/reviews", GetReviews)

export { router_1 }