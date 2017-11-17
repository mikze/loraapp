import SimpleSchema from 'simpl-schema';

export const addNewChart = new SimpleSchema({
    chartName: { 
        type: String
    },
    measurementName: {
        type: String,
    },
    description: String,

    data:{
        type: Array
    },
    'data.$': Object
});