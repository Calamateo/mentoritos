import axios from 'axios'

const sendMail= (datas)=>{
  var url = 'https://api-mentoritos.herokuapp.com/send-email';
 axios({
  method: 'post',
  url: url,
  data: datas
});
}

export {sendMail}