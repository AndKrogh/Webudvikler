/* import '@/';
import {
    getAuth, signInWithEmailAndPassword, onAuthStatechanged,
} from '';

const auth = getAuth();

export const stateChange = (callback) => {
    ontAuthStateChanged(auth,callback);git 
}

export const signIn = async (email, password) => {
    try {
        const userData = await signInWithEmailAndPassword(auth, email, password);

        return {
            uid: userData.user.id
        };

        console.log(userData);
    } catch (e) {
        console.log(e);
    }
}; */