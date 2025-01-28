import mongoose from "mongoose";

// MongoDB connection URI
const MONGO_URI = process.env.MONGO_URI; // Store your Mongo URI in .env.local

// Define Mongoose model for the holders collection
const HolderSchema = new mongoose.Schema({
  wallet: String,
  tokenAccount: String,
  quantity: Number,
  percentage: Number,
});

const Holder = mongoose.models.Holder || mongoose.model("Holder", HolderSchema);

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) {
    return;
  }
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export async function GET(req) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Fetch the top holders, sort by percentage in descending order, and limit to 22
    const topHolders = await Holder.find()
      .sort({ Percentage: -1 }) // Sorting by percentage in descending order
      .limit(22); // Limiting to top 22 holders

    // Send the top holders data as a response
    return new Response(JSON.stringify({ topHolders }), { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
