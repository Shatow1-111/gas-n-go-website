import { db, auth } from "./firebase.js";
import { addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

document.getElementById("apply").onclick = async () => {
  await addDoc(collection(db, "applications"), {
    discordId: auth.currentUser.uid,
    username: auth.currentUser.displayName,
    reason: reason.value,
    timestamp: serverTimestamp()
  });

  alert("Application sent");
};
