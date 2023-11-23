import mongodb from "../../utils/mongodb"
import jsondb from "@/jsondb/products";
import Produkt from "../../models/Produkte";

export default async function handler(req, res) {
  await mongodb.dbConnect();
  await Produkt.deleteMany();
  await Produkt.insertMany(jsondb.produkte)
  await mongodb.dbDisconnect();
  res.send({ text: 'Daten Gespeichert' })
}


 