const mongoose = require("mongoose");
const config = require("../config/default.js");
mongoose.set("debug", true);
mongoose.connect(config.DATABASE_ADRESS, {useNewUrlParser: true});


class DEPARTAMENT_SCHEMA
{
    constructor()
    {
        this.schema = new mongoose.Schema(
        config.DEPARTAMENT_SCHEMA,
        {
            timestamps: true
        });
        this.DEPARTAMENT_Model = mongoose.model(config.DEPARTAMENTS_MODEL, this.schema);
    };
    getDepartament = async (dep) =>
    {
        let docs = await new Promise(
            (resolve, reject) =>
            {
                this.DEPARTAMENT_Model.find
                (
                    {
                        name: dep
                    },
                    (err, doc) =>
                    {
                        if(err) reject ("err" + err);
                        else
                        {
                            resolve(doc);
                        }
                    }
                );
            }
        );
        return docs;
    };
    updateDEPARTAMENT = async (id, props, res) =>
    {
        await this.DEPARTAMENT_Model.updateOne({_id: id}, {$set: props});
        res();
    };
};


let departament_schema = new DEPARTAMENT_SCHEMA();
module.exports = departament_schema;