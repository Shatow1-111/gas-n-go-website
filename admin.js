document.getElementById("submit").onclick = async () => {
  const item = document.getElementById("item").value;
  const amount = document.getElementById("amount").value;

  const res = await fetch(
    "https://gas-n-go-website.gruskinkolten.workers.dev/purchase",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // IMPORTANT for login
      body: JSON.stringify({ item, amount })
    }
  );

  const data = await res.json();
  alert(data.message || "Logged!");
};
