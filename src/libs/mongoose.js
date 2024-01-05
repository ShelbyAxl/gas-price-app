import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
}

export const  ConnectionDB = async () => {
  if (conn.isConnected) return;
  const connectDB = await connect(
    "mongodb+srv://admin:root@gaspricedb.exw5njc.mongodb.net/?retryWrites=true&w=majority"
  );
  conn.isConnected = connectDB.connections[0].readyState;
}

connection.on("connected", () => {
  console.log("Mongoose is conected!");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error!", err);
});
