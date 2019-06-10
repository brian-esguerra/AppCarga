import * as firebase from 'firebase';

class Firebase {

	static init(){
		firebase.initializeApp({
			apiKey: "AIzaSyChZnG4dSybn5LTlQfXXU3m2Sa6b_kiHog",
		    authDomain: "appcarga-7da73.firebaseapp.com",
		    databaseURL: "https://appcarga-7da73.firebaseio.com",
		    storageBucket: "appcarga-7da73.appspot.com",
		});
	}
}

module.exports = Firebase