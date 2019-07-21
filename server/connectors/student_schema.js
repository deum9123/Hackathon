const mongoose = require("mongoose");
const config = require("../config/default.js");
mongoose.set("debug", true);
mongoose.connect(config.DATABASE_ADRESS, {useNewUrlParser: true});


class STUDENT_SCHEMA
{
    constructor()
    {
        this.schema = new mongoose.Schema(
        config.STUDENT_SCHEMA,
        {
            timestamps: true
        });
        this.STUDENT_Model = mongoose.model(config.STUDENT_MODEL, this.schema);
    };
    getStudent = async (lg) =>
    {
        let docs = await new Promise(
            (resolve, reject) =>
            {
                this.STUDENT_Model.find
                (
                    {
                      //  login: lg
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
    updateStudent = async (id, props, res) =>
    {
        await this.STUDENT_Model.updateOne({_id: id}, {$set: props});
        res();
    };
};


let student_schema = new STUDENT_SCHEMA();
module.exports = student_schema;