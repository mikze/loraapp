import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
// import ChatSchema from './schema.js';

const Measurements = new Mongo.Collection('measurements');

if(Meteor.isServer){Meteor.publish( 'measurements', function() {
    return Measurements.find({'ownerId': this.userId});
  });
  
  WebApp.connectHandlers.use('/hello', (req, res, next) => {
    if(req.method === 'POST' && req.body.token === 1234)
    {
      res.writeHead(200);
    res.end(`inesrt data ${req.body.xD} ${req.body.token}`);
  }
    else{
      res.end(`ERROR PAGE NOT FOUND`);}
    }
  );

}

export { Measurements };