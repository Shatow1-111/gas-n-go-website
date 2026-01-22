import { auth, db } from "./firebase.js";
import { OAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const provider = new OAuthProvider("discord");
provider.addScope("identify");

document.getElementById("login").onclick = async () => {
  const result = await signInWithPopup(auth, provider);
  const discordId = result.user.providerData[0].uid;

  const adminRef = doc(db, "admins", discordId);
  const adminSnap = await getDoc(adminRef);

  if (adminSnap.exists()) {
    window.location.href = "admin.html";
  } else {
    window.location.href = "apply.html";
  }
};
