const mongoose = require("mongoose");
const config = require("../config/default.js");
mongoose.set("debug", true);
mongoose.connect(config.DATABASE_ADRESS, {useNewUrlParser: true});


class User_shema
{
    constructor()
    {
        this.schema = new mongoose.Schema(
        config.CLUB_SCHEMA,
        {
            timestamps: true
        });
        this.clubModel = mongoose.model(config.CLUBS_MODEL, this.schema);
    };
};


let User = new User_shema();
module.exports = User;