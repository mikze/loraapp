import { Meteor } from 'meteor/meteor';
import { Measurements} from '../measurements.js';

    WebApp.connectHandlers.use('/hello', (req, res, next) => {
      if(req.method === 'POST')
      {
          
        const user = Meteor.users.findOne({ token : req.body.token });

        const data = req.body.data;
        
        Measurements.update({_id: req.body.id,ownerId:user._id}, {$push: {data}});

        res.writeHead(200);
        res.end('poszlo');
    }
      else{
        res.end(`ERROR PAGE NOT FOUND`);}
      }
    );
  
  