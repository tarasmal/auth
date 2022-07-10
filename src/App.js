import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div className={'container'}>
        <SignIn/>
        <div className={'d-flex justify-content-center'}>
            <p className={'middleware'}>
                Or
            </p>
        </div>
        <SignUp/>
    </div>
  );
}

export default App;
