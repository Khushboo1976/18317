import { logEvent } from "../../../logging_middleware/log";
const BASE_URL = "http://20.207.122.201/evaluation-service/notifications";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJraHVzaGJvbzEyMjQ0QGdtYWlsLmNvbSIsImV4cCI6MTc3Nzg3MzYzMywiaWF0IjoxNzc3ODcyNzMzLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNjAwODJjMDItZjBlYS00ZWM0LTllNGUtMGRlNDM1MjNmZTY4IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoia2h1c2hib28gZ295YWwiLCJzdWIiOiI1ZmQ2ZTA5NC1iNjc0LTQ2OWYtYjYwNi1jZDk2YWIzYjNiMDkifSwiZW1haWwiOiJraHVzaGJvbzEyMjQ0QGdtYWlsLmNvbSIsIm5hbWUiOiJraHVzaGJvbyBnb3lhbCIsInJvbGxObyI6IjE4MzE3IiwiYWNjZXNzQ29kZSI6InVrc2RXVCIsImNsaWVudElEIjoiNWZkNmUwOTQtYjY3NC00NjlmLWI2MDYtY2Q5NmFiM2IzYjA5IiwiY2xpZW50U2VjcmV0IjoiR3pFZllTcmd1dHBORmJ4ZCJ9.PYVG_AhlW4Hs9ADf-HTnvdy0MZGwVmMKaJ0xFX4plb0";
export async function getNotifications() {
  try {
    logEvent("frontend", "info", "api", "Requesting notifications");
    const response = await fetch(BASE_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    const data = await response.json();
    logEvent("frontend", "info", "api", "Notifications received");
    return data;
  } 
  catch (err) {
    logEvent("frontend", "error", "api", "Fetch failed");
    return [];
  }
}