/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0lJbnVpVkNjM096dVFmSVhJMzFhL3MyeWpweTE1cGVlQmlPNTVMWDIxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXJBU0FZcU81NDJXaW8vMGVqaGlnS0JsOVhiYTU2U2NnQnZ5NjdYcHJ6QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRFhyL1FsemphdnU1WTV6VE81M0JxS0ROZ0NaNWpybGRSSWJwT1VpUmtvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnVWpxNHU3RVkrUDFaR1dBbFJZYS9pdDYzaTNEMTFHTEt3NFRTdEU0dVZRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktCU0ZYcWp1Yk9FMGpaTnhaTm9zRjBBNEhxYjlrd2kxVWhkY3NVY0lEa2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVvelZkTTVFQSt4UFFNU0xhdjl6MzJqNDlyeGpYNlh5VXVsS1FLQ0c0U1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0xGUHB4c0R1ZVNrMFpaOUlXbFh5RmxEcGVoemU4WTg5dm1OcVBpSzlrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVRSU3hoRUFYZHIraUJlbUpBdFkwQXpTaVptM3htR0I1YVo0VGJ2REFIbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd5YUpJQVlYNWNvN2k1YSt0T3VaNTZzU2ZRT3FVUTlnNXJZV1cwc2R3cEthM3d6SU92MFJ1bHM5eDFZdEsvN1NnT2JOMVNBVVdkOW44OU1yVWVKRmhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDcsImFkdlNlY3JldEtleSI6IlVnVjlRaHk4T1VoN2FYYjZsendXOHRyS2hKT0w3ZndYaWhLc1RmTjFPTWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE5MzMwOTU0MTkyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlDMDFBQjg1OUI5MkM0MzExNkFFN0I4RjlCNjVBRjFEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mzk1NTg0NjJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxOTMzMDk1NDE5MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEMEVBQUNBRDdFMTEyQzVEMjlFNEYyRTBGQjQ3NDBBNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM5NTU4NDY0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTkzMzA5NTQxOTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTdFQjFGREZBMTE3MjAyQkUzMzM2REQ0NkNBMTEwOTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczOTU1ODQ4Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTE5MzMwOTU0MTkyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQ5Njg3NzVEMDRFQkIzRUM2MTEzNUY3NDlGNjkxMjM4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mzk1NTg0ODd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxOTMzMDk1NDE5MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2RjVDNEVCNzMzRkFDRjcxNzgwQ0JGMzExNkMwOUZDQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM5NTU4NDk1fV0sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZNHZUM2V1ZlF5cWVXTV9hY0o2OU9RIiwicGhvbmVJZCI6IjgxNmFlZDEzLWZmOGYtNDA4Yi1iNTMxLTNmYmQyOTliZmE3OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqdVh1SEc2Q0NXQkxuYW5DTkFlSHZydHRFMDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUE1BM2xwbHhCbE5mMTJDY3JXODBXcTllcFFnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFWUkxQNzNNIiwibWUiOnsiaWQiOiI5MTkzMzA5NTQxOTI6NzdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiOTE5MzMwOTU0MTkyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMYnovc0VERUt5Y3ZyMEdHQkFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxUkIwdkowK21rcmMwV1hZMWFGSlBVNzRTOHhrOTVCem15ZW1xZnFoTWo0PSIsImFjY291bnRTaWduYXR1cmUiOiI0Z3Z1K3FlSHRDbGd3eThCOW5MYzNHS3hkVlMrVk1xREpmWWxVdExWUTJmclBqVHl4THJyUko2eVh6ejhMMzJXZW5qdUJDUFNXKy80djZ2YUpUMWtDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRUlZTDAvdDl3VE9ZYUVQaGhXY1lDaWd1QThwRzJuUlg3SEhFZ0FQS0h6VUVzNS8vTEFGSEIyaXNGbzEwdXJPNzNycTVFTkh1N0R0MjgwNjA1czJUaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTkzMzA5NTQxOTI6NzdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYWtRZEx5ZFBwcEszTkZsMk5XaFNUMU8rRXZNWlBlUWM1c25wcW42b1RJKyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczOTU1ODQ1NiwibXlBcHBTdGF0ZUtleUlkIjoiQUVjQUFJUTEifQ==';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'fortunatus';
const packname = process.env.PACKNAME || 'dreaded md2 🤖';
const dev = process.env.DEV || '254114018035';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'DREADED';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const cookies = JSON.parse(process.env.COOKIE || '[{"domain":".youtube.com","expirationDate":1764463277.409877,"hostOnly":false,"httpOnly":false,"name":"__Secure-1PAPISID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"UoBcKfo0_FSAxQ5D/A5ZClpB2xVLQJQGUx","id":1},{"domain":".youtube.com","expirationDate":1764463277.412158,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"g.a000pghxevPjwTr5Un_D-PS1UxiaEdymANhc_5NWNQgaApthzLU0MOFGGamQ5yqi2vrAqKldbgACgYKASoSARUSFQHGX2MiB0PtUQYJy2_oQLkmMPXgfRoVAUF8yKpuqWya_M2xRHe_6e9o_6TK0076","id":2},{"domain":".youtube.com","expirationDate":1762941611.655441,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSIDCC","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"AKEyXzWtrmvqerXnEweUSkGiFKAn57TBnvoAEBDi6B33Sg4gpMOANgVFwDBU_JtKQXLpisy_","id":3}]');
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  cookies,
  autobio,
  mode,
autolike,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
