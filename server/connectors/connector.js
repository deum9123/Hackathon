const mongoose = require("mongoose");
const config = require("../config/default.js");
mongoose.set("debug", true);
mongoose.connect(config.DATABASE_ADRESS, {useNewUrlParser: true});


class ClubsSCHEMA
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
    getClubs = (clb) =>
    {
        let callback = clb;
        let docs = this.clubModel.find(
            {},
            (err, doc) =>
            {
                if(doc)
                {
                    callback(doc);
                    return doc;
                } else 
                {
                    callback(err);
                    return err
                }
            }
        );
    };
    updateClub = async (id, props, res) =>
    {
        await this.clubModel.updateOne({_id: id}, {$set: props});
        res();
    };
};


let clubsSCHEMA = new ClubsSCHEMA();
module.exports = clubsSCHEMA;