import SignUpForm from '../../sign-up-form/sign-up-form.component';
import {
  signInWithGooglePopup,
  createUserDocumentFormAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFormAuth(user);
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with goolge</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
