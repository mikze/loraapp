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