/* import '@/';
import {
    getAuth, signInWithEmailAndPassword,
} from '';

const auth = getAuth();

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