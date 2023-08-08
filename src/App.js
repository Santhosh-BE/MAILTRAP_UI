// import React, { useState } from "react";
// import Header from "./header/Header";
// import Sidebar from "./sidebar/Sidebar";
// import "./App.css";
// import EmailList from "./Email body/EmailList";
// import Compose from "./compose/Compose";
// // import { useSelector } from 'react-redux';
// import { Route, Routes } from "react-router-dom";
// import MailOpen from "./mail open/MailOpen";
// import Login from "./authentication/Login";
// import PrivateRoute from "./PrivateRoute";
// // import Login from './authentication/Login';
// // import { auth } from './firebase/firebase';
// // import { useDispatch } from 'react-redux';
// // import { login, logout } from './redux store/userSlice';

// const App = () => {
//   const [isMessageOpen, setIsMessageopen] = useState(false);
//   console.log(setIsMessageopen, "setIsMessageopen");
//   // const user = useSelector((state) => state.user.user)
//   // const dispatch = useDispatch()

//   // useEffect(() => {
//   //     auth.onAuthStateChanged((userAuth) => {
//   //         if (userAuth) {
//   //             dispatch(login({
//   //                 name: userAuth.displayName,
//   //                 email: userAuth.email,
//   //                 photoURL: userAuth.photoURL
//   //             }))
//   //         } else {
//   //             dispatch(logout())
//   //         }
//   //     })
//   // }, [dispatch])
//   const localstorege = () => {
//     if (
//       localStorage.getItem("ACCESS_TOKEN") &&
//       localStorage.getItem("REFRESH_TOKEN")
//     )
//       return true;
//     else return false;
//   };
//   return (
//     <div>
//       {
//         // user ?
//         <div className="userWrap">
//           <Header></Header>

//           <div className="app-body">
//             <Sidebar setIsMessageopen={setIsMessageopen} />

//             <Routes>
//               <Route path="/" element={<Login />}></Route>
//               <Route element={<PrivateRoute isAuth={localstorege()} />}>
//                 {/* <Route element={<Header />}>
//                   <Route
//                     element={<Sidebar setIsMessageopen={setIsMessageopen} />}
//                   > */}
//                     <Route path="/inbox" element={<EmailList />}></Route>
//                     <Route path="/mailbox" element={<MailOpen />}></Route>
//                   </Route>
//                 {/* </Route>
//               </Route> */}
//             </Routes>
//           </div>

//           {isMessageOpen && <Compose setIsMessageopen={setIsMessageopen} />}
//         </div>
//         // : (<Login></Login>)
//       }
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import "./App.css";
import EmailList from "./Email body/EmailList";
import Compose from "./compose/Compose";
import { Route, Routes } from "react-router-dom";
import MailOpen from "./mail open/MailOpen";
import Login from "./authentication/Login";
import PrivateRoute from "./PrivateRoute";
// const AuthenticatedRoutes = ({ setIsMessageOpen }) => {
//   return (
//     <div className="userWrap">
//       <Header />
//       <div className="app-boddffdfy">
//         <Routes>
//           <Route element={<Header />}>
//             <Route element={<Sidebar setIsMessageOpen={setIsMessageOpen} />}>
//               <Route path="/inbox" element={<EmailList />} />
//               <Route path="/mailbox" element={<MailOpen />} />
//             </Route>
//           </Route>
//         </Routes>
//       </div>
//     </div>
//   );
// };
const App = () => {
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [hamburgerIcon, setHamburgerIcon] = useState(false);
  console.log(isMessageOpen, "isMessageOpen");
  return (
    <>
      {localStorage.getItem("ACCESS_TOKEN") ? (
        <div className="userWrap">
          {/* <Compose setIsMessageOpen={setIsMessageOpen} /> */}
          <Header setHamburgerIcon={setHamburgerIcon} hamburgerIcon={hamburgerIcon}/>
          <div className={hamburgerIcon?"app-body-icon":"app-body"}>
            <Sidebar setIsMessageOpen={setIsMessageOpen} hamburgerIcon={hamburgerIcon}/>
            <Routes>
              <Route path="/inbox" element={<EmailList />} />
              <Route path="/mailbox/:messageId" element={<MailOpen />} />
            </Routes>
          {isMessageOpen && <Compose setIsMessageOpen={setIsMessageOpen} />}
          </div>
        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Login />}></Route>
          </Routes>

        </div>
      )}
    </>
  );
};

export default App;
