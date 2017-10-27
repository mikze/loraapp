import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
// import ChatSchema from './schema.js';

const Measurements = new Mongo.Collection('measurements');

if(Meteor.isServer){
  
  WebApp.connectHandlers.use('/hello', (req, res, next) => {
    if(req.method === 'POST' && req.body.token === 1234)
    {
      res.writeHead(200);
    res.end(`inesrt data ${req.body.xD} ${req.body.token} ${req.body.value}`);
  }
    else{
      res.end(`ERROR PAGE NOT FOUND`);}
    }
  );

}

export { Measurements };