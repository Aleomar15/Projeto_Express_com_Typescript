import {model, Schema} from "mongoose"

const movieShema = new Schema(
    {
        title: {type: String},
        rating: {type: Number},
        description: {type: String},
        director: {type: String},
        star: {type: Array},
        poster: {type: String}
    },
    {
        timestamps: true
    }
);

export const MovieModel = model("Movie", movieShema);
