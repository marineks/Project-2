const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memoriesSchema = new Schema(
  {
    title: String,
    imageSong: { type: Schema.Types.ObjectId, ref: "spotifyImg" }, /// WARNING: NOT SURE IT'S CORRECT
    song: { type: Schema.Types.ObjectId, ref: "spotifySong" }, /// WARNING: SAME AS ABOVE
    with: String,
    mood: String,
    description: String,
    date: Date,
  },
  { timestamps: true }
);

const MemoriesModel = mongoose.model("memory", memoriesSchema);

module.exports = MemoriesModel;