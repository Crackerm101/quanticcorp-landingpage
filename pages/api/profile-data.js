// import { data } from "./faqs.json";
import { faqs_categories } from "./faqs.json";

export default function profiledata(req, res) {
    res.status(200).json(faqs_categories);
}
