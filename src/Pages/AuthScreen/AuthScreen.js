import React from "react";
import { Button, Image } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import GoogleIcon from "../../Assets/Images/google.svg";
import { auth, firestore } from "../../Services/firebase";

export default function AuthScreen() {
  const history = useHistory();
  const { deviceID, userID, temp } = useParams();
  const provider = new auth.GoogleAuthProvider();
  const handleAuth = async () => {
    await auth()
      .signInWithPopup(provider)
      .then(async (user) => {
        await firestore()
          .collection("/data")
          .doc(userID)
          .set({
            name: user.user.displayName,
            email: user.user.email,
            phoneNumber: user.user.phoneNumber,
            deviceID: deviceID,
            temperature: temp,
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        auth().currentUser.delete();
        auth().signOut();
        history.push("/success")
      });
  };

  return (
    <div>
      <Button variant="outline-primary" onClick={handleAuth}>
        Authenticate With Google{" "}
        <Image
          style={{ width: "1.5rem", height: "1.5rem", marginLeft: 5 }}
          src={GoogleIcon}
          rounded
        />
      </Button>
    </div>
  );
}
