import SimpleSchema from 'simpl-schema';

export const addNewChart = new SimpleSchema({
    chartName: { 
        type: String
    },
    measurementName: {
        type: String,
    },
    description: String,

    lines:{
        type: Array
    },
    'lines.$': String
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