const config = require("../config/default.js");
const serviceSchema = require("../connectors/mongo_connector.js");
const clubsSchema = require("../connectors/clubs_connector.js");
class Store
{
    constructor(time)
    {
        this.listeners = {};
        let clubsArray = clubsSchema.getClubs(this.parseClubs);
        this.clubs = [];
        this.srvs = 
        {
            "01":
            {
                max: 500000,
                min: 20000,
                url: "/3000",
                ballMax: 36,
                ballMin: 1,
                ballsLength: 5
            }
        }
    };
    parseClubs = (data) =>
    {
        this.clubs = data;
    }
    set = (props) =>
    {
        for(var prop in props)
        {
            this[prop] = props[prop];
            if(this.listeners[prop])
            {
                this.listeners[prop].forEach(element => 
                {
                    element(this[prop]);
                });
            }
        }
    };
    setClub = (clubNum, props, res) =>
    {
        clubNum = parseInt(clubNum);
        for(var prop in props)
        {
            this.clubs[clubNum][prop] = props[prop];
        }

        clubsSchema.updateClub(this.clubs[clubNum]._id, props, res);       
    };
    setStartOtions = (data) =>
    {
       
    }
    getClub = (clubNum) =>
    {
        return this.clubs[clubNum];
    }
    get = (prop) => 
    {
        return this[prop];
    };
    addListener = (prop, callback) =>
    {
        if(!this.listeners[prop])
        {
            this.listeners[prop] = [];
        }
        let check = 0;
        this.listeners[prop].forEach((item, i, arr) => 
        {
            if(item == callback)
            {
                check = 1;
            }
        });
        if(!check)
        {
            this.listeners[prop].push(callback);
        } 
        else
        {
            return "Этот обработчик уже назначен";
        } 
    }
}
var store = new Store(config.TIME);
module.exports = store;