import SimpleSchema from 'simpl-schema';

export const addNewVar = new SimpleSchema({
    measurementName:String,
    dataName:String,
    xname: String,
    xunit: String,
    yname: String,
    yunit: String,

    // lines:{
    //     type: Array
    // },
    // 'lines.$': String
});

export const addNewMeasurement = new SimpleSchema({
    id: {
        type: String
    },
    text: {
        type: String
    },
    description: {
        type: String
    }
});

export const addNewLine = new SimpleSchema({
    measurementName: {
        type: String
    },
    line:{
        type: String
    },
});