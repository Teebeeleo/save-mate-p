import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Plans from "./pages/Plans";
import Activity from "./pages/Activity";
import Profile from "./pages/Profile";
import CreateNewPlan from "./pages/CreateNewPlan";
import LinkBank from "./pages/LinkBank";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="plans" element={<Plans />} />
          <Route path="activity" element={<Activity />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/createNewPlan" element={<CreateNewPlan/>}/>
          <Route path="/linkBank" element={<LinkBank/>}/>
          <Route path="signIn" element={<SignIn/>}/>
          <Route path="signUp" element={<SignUp/>}/>
        </Routes>
    
    </>
  );
}

export default App;
