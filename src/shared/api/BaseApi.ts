import firebase from 'firebase';

abstract class BaseApi {
  constructor() {
    //
  }

  post(refName: string, data?: any) {
    const ref = firebase.database().ref(refName);
    return ref.push().set(data);
  }
}

export default BaseApi;
