document.getElementById("apply").onclick = async () => {
  const reason = document.getElementById("reason").value;

  const res = await fetch(
    "https://gas-n-go-website.gruskinkolten.workers.dev/apply",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ reason })
    }
  );

  const data = await res.json();
  alert(data.message || "Application sent!");
};

