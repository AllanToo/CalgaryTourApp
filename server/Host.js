const mongoose = require('mongoose');



const HostSchema = mongoose.Schema(
    {
        host_id : Number,
        entry_created : Date,
        entry_modified : Date,
        fname : String,
        lname : String
    }
);

module.exports = mongoose.model('Host',HostSchema);