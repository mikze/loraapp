import { Meteor } from 'meteor/meteor';
import { Measurements} from '../measurements.js';

    WebApp.connectHandlers.use('/hello', (req, res, next) => {
      if(req.method === 'POST')
      {
        const findIndex = (dataName,data) =>
        {
          const datas = Measurements.findOne({_id: measurementName, ownerId:user._id});
          let index = 0;
          data.map( (x,i) => eval('x.'+name) ? index = i : null);
          
        }

        const user = Meteor.users.findOne({ token : req.body.token });

        const data = req.body.data;
        const path = "datas.$.data." + req.body.device;
        Measurements.update({_id: req.body.id,ownerId:user._id,"datas.dataName": req.body.dataName}, 
        {$push: {[path] : {x:req.body.x, y:req.body.y, l:req.body.l, a:req.body.a} }});

        res.writeHead(200);
        res.end(JSON.stringify(req.body));
    }
      else{
        res.end(`ERROR PAGE NOT FOUND`);}
      }
    );
  
  