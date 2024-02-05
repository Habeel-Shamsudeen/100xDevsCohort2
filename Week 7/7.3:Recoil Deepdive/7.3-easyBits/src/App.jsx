import { useState } from "react";
import "./App.css";
import { useRecoilValue, RecoilRoot } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationCount } from "./atmos";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messagingNotificationCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom)

    // const totalNotificationCount = useMemo(() => {
  //   return networkNotificationCount + jobsNotificationCount + messagingNotificationCount + notificationCount;
  // }, [networkNotificationCount, jobsNotificationCount, messagingNotificationCount, notificationCount]) 
  const totalNotification = useRecoilValue(totalNotificationCount)
  return (
    <>
      <button>Home</button>
      <button>
        My network(
        {networkNotificationCount > 100 ? "99+" : networkNotificationCount})
      </button>
      <button>jobs({jobsNotificationCount > 100 ? "99+" : jobsNotificationCount})</button>
      <button>messaging({messagingNotificationCount})</button>
      <button>notification({notificationCount})</button>

      <button>me({totalNotification})</button>
    </>
  );
}

export default App;
