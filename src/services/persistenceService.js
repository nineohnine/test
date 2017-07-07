import { AsyncStorage } from 'react-native';

export default class PersistenceService {

  constructor(key){
    this.key = key;
  }

  persist(data){
    try {
      if(typeof data === 'object'){
        data = JSON.stringify(data);
      }

      return AsyncStorage.setItem(this.key, data);
    }
    catch (e) {
      console.err(`persist error: ${e}`);
    }
  }

  load(){
    try {
      return AsyncStorage.getItem(this.key);
    }
    catch (e) {
      console.err(`load error: ${e}`);
    }
  }

}
