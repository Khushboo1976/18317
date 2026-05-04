const ENDPOINT = "http://20.207.122.201/evaluation-service/log";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJraHVzaGJvbzEyMjQ0QGdtYWlsLmNvbSIsImV4cCI6MTc3Nzg3MzYzMywiaWF0IjoxNzc3ODcyNzMzLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNjAwODJjMDItZjBlYS00ZWM0LTllNGUtMGRlNDM1MjNmZTY4IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoia2h1c2hib28gZ295YWwiLCJzdWIiOiI1ZmQ2ZTA5NC1iNjc0LTQ2OWYtYjYwNi1jZDk2YWIzYjNiMDkifSwiZW1haWwiOiJraHVzaGJvbzEyMjQ0QGdtYWlsLmNvbSIsIm5hbWUiOiJraHVzaGJvbyBnb3lhbCIsInJvbGxObyI6IjE4MzE3IiwiYWNjZXNzQ29kZSI6InVrc2RXVCIsImNsaWVudElEIjoiNWZkNmUwOTQtYjY3NC00NjlmLWI2MDYtY2Q5NmFiM2IzYjA5IiwiY2xpZW50U2VjcmV0IjoiR3pFZllTcmd1dHBORmJ4ZCJ9.PYVG_AhlW4Hs9ADf-HTnvdy0MZGwVmMKaJ0xFX4plb0";
const allowed = {
  stack: ["backend", "frontend"],
  level: ["debug", "info", "warn", "error", "fatal"],
};
export async function logEvent(stack, level, pkg, message) {
  if (!allowed.stack.includes(stack) || !allowed.level.includes(level)) {
    console.warn("Invalid log params");
    return;
  }
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message,
      }),
    });
    const result = await res.json();
    console.log("Logged:", result.logID);
  } catch (e) {
    console.error("Log error:", e);
  }
}
