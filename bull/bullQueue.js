const Queue = require('bull');
const sendMail=require('./sendMail')
/** @description This functions maintains a queue of mail ids to which mail should be sent
 * @param {object} res -  Reponse object with filtered persons list if success or error message if there is an error.
 * @param {requestCallback} next - The callback that calls the error handling middleware.
 *  @returns -list of Filtered Actors
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
sendMailQueue.add(data, options);
sendMailQueue.add({email:'mohitha.e@westagilelabs.com'},{priority:1})
sendMailQueue.add({email:'kavithasrieduru@gmail.com'})
sendMailQueue.process(async job => {
  return await sendMail(job.data.email);
});
sendMailQueue.on('completed', (job, result) => {
  console.log(`Mail has been sent`);
})
