//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUhFeDRpSmtna2d2QTkvQkxwNnM2M0VtNC9ZY2FIdkRORFdoaXdrNVFWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlpVb1AvK2RHTWFwbnZ3VDJoSWdOeGNJTTJPWGFvNllEM2dsM01saUVYWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSFJWbjRjU0VnbTJvSEovK25pQkdMazg5bC9xcTlvWGJWQVpHK0RXQzBBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGYkpPZm9kNW1xUWw4Z05CWjhuSlR4bGtEa0hqMkVWNWFuVDhyVkZCd3g0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllMQWZEQ3B0QTBvcnhtMWpNUmE2WXFLakxPQ3pzak1uOG9oK3hwNE9pV0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkUvOWJxS0FwWGY4V3FJd1hOQ28wYnJRQ3g2SzJvbFFySTQwUm9keHRMa2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUVibzQ3eEwvMGp4Q0lTdDcrRXVwT0dESm5adkRFYjhMckdSWG50UkpHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkJZTllhNnFtWFdRQU44bVZrRkhjd2V1QmlUVFBmQXZzRmlxcTJNekdBaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJ0UFI1RSt1Tk5nZ0M2MzBPdkhlbWhwOXFLN0VNWDl2amhnOFQ0aWRtMVVvWXc5cVhVTHhrRFQrZHh1Y3NYK0xrL3Z0RkhVenMrODRFWnFxd0wvZ0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA4LCJhZHZTZWNyZXRLZXkiOiJOMUpkZFJIRGU1WnVSMTZBT2dWWUQ3Q2NTTHVMR1YzN1R3aWJsQ0xuMStjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOYTVQOC1FclNNU1FmUkxKdEdPNlJ3IiwicGhvbmVJZCI6ImEwMTcwZjM3LTc3YjEtNGQ5Yy04NmFkLTM0OTY1YTA5NmVmNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGdXN0NzJ3bm56dER4NUl4WEJGbHMrMjdvZEU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVlOYkVqSjVTak9LZ3R5NFE4QVZyTWJJcG5VPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpZSDlBSE02IiwibWUiOnsiaWQiOiIyNjM3MTIxMjUyMjE6MTFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tPRjM4MEdFSitSZ3JRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZSYnZad0Nkc3pKTmcvVHAyRUZBL1dTdkRRWXhwUU5Pb2t2bTllNnhKa3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6InRBVVlyQWZYRmVGM0tRTWVOTHd3S25jVHV5elk2MWh3K3ZUNkQrRTdhcGtjQzl5MFNvNnRJVlVYVmhkaGEwR0prMVNmVVpuZmIvcjdEQkIrb3dqZERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxWVFVS1VobnhrVVRncVJyQlJjVVlUdk1wdXREaGFsd0xQeDNBTmRTaHZmM2dwbTJNRk8vZWtlcmRTQzlBQlNlblV0UjA1amdIcHg1eS8vV0Y3akxCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxMjEyNTIyMToxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSVVc3MmNBbmJNeVRZUDA2ZGhCUVAxa3J3MEdNYVVEVHFKTDV2WHVzU1pNIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5Njk5NjI4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVGZiJ9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "263713271179")
  : "263713271179";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg,https://telegra.ph/file/7275967ae7b5283fada69.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/7275967ae7b5283fada69.jpg,https://telegra.ph/file/c3049cd3ac77f371e119e.jpg,https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/85fe388fdd14930cf86a0.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©QUEEN_ANITA-V2`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "PROSPER G",
  ownername: process.env.OWNER_NAME || "MAN TAKUN",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "prospertakunda3@gmail.com";
global.location = "Zimbabwe";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "26312125221";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
