// 参考：TypeScript版（bonus-clock/solution/clock.ts）と同じ内容のJavaScript版
// 型注釈（: HTMLElement や : void など）がなくなっている点を見比べてみてください。

const clockEl = document.getElementById("clock");

function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  clockEl.textContent = `${h}:${m}:${s}`;
}

setInterval(updateClock, 1000);
updateClock();
