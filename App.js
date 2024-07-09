import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components/native";

import { initializeApp, getApps } from "firebase/app";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDUXYQFzU-6cOR6LtuPdqQaRuLDMgGP3YY",
  authDomain: "mealstogo-d1c32.firebaseapp.com",
  projectId: "mealstogo-d1c32",
  storageBucket: "mealstogo-d1c32.appspot.com",
  messagingSenderId: "546182981410",
  appId: "1:546182981410:web:495c3fe5550c507fc8e77b",
};

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}
// const auth = getAuth();

export default function App() {
  // signInWithEmailAndPassword(auth, "mo@g.io", "test123")
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     console.log("signed in");
  //     console.log(user);
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
