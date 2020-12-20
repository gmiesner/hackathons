class User{
  constructor(name, age, sex){
    let healthdata = require('./healthdataformat.json');//JSON
    this.getName = () => name;
    this.setName = newName => name = newName;
    this.getAge = () => age;
    this.setAge = newAge => age = newAge;
    this.getSex = () => sex;
    this.setSex = newSex => sex = newSex;
    this.setHealthData = healthJSON => healthdata = healthJSON;
    this.getHealthData = () => healthdata;
  }
  uploadFromFitbit = function(){
    let oauthURL = 'https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22BYJJ&redirect_uri=http%3A%2F%2Flocalhost%2F&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800';
    //on website, detect page visits that have #access_token. in DB, save user with access_token, user_id, scopes, time to live.
  }
}
module.exports.userclass = User;