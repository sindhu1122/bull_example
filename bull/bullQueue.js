const Queue = require('bull');
const sendMail=require('./sendMail')
/** @description This functions maintains a queue of mail ids to which mail should be sent
    @requires bull
*/

const sendMailQueue = new Queue('sendMail', {
  redis: {
    host: '127.0.0.1',
    port: 6379,
  }
});
const data = {
  email: 'essk1998@gmail.com'
};
const options = {
  attempts: 2
};
/** Adds the jobs to the queue
 * Jobs are nothing but the objects

*/
sendMailQueue.add(data, options);
sendMailQueue.add({email:'mohitha.e@westagilelabs.com'},{priority:1})
sendMailQueue.add({email:'kavithasrieduru@gmail.com'})

/**
 * Process the jobs that are present in the queue
 * this calls the sendMail function for each object in the queue and sends the function
 */
sendMailQueue.process(async job => {
  return await sendMail(job.data.email);
});
/**
 * @event completed triggers when the job is completed
 */
sendMailQueue.on('completed', (job, result) => {
  console.log(`Mail has been sent`);
})
