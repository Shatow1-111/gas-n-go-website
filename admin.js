import { db, auth } from "./firebase.js";
import { addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

document.getElementById("save").onclick = async () => {
  await addDoc(collection(db, "purchases"), {
    item: item.value,
    amount: Number(amount.value),
    loggedBy: auth.currentUser.uid,
    timestamp: serverTimestamp()
  });

  alert("Purchase logged");
};
