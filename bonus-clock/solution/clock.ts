const clockEl = document.getElementById("clock") as HTMLElement;

function updateClock(): void {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  clockEl.textContent = `${h}:${m}:${s}`;
}

setInterval(updateClock, 1000);
updateClock();
