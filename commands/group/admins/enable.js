const {
  getDisableCommandData,
  setDisableCommandData,
} = require("../../../db/disableCommandDB");

module.exports.command = () => {
  let cmd = ["enable"];

  return { cmd, handler };
};

const handler = async (bot, msg, from, msgInfoObj) => {
  let { reply, args } = msgInfoObj;

  if (args.length === 0) {
    await reply("❌ Give command name also by !enable commandName");
    return;
  }
  let cmd = args[0].toLowerCase();
  let res = await getDisableCommandData(from);

  if (!res.includes(cmd)) {
    await reply("❌ Already enabled!");
    return;
  }

  resNew = res.filter((c) => {
    return cmd != c;
  });

  await setDisableCommandData(from, resNew);

  await reply("✔️ Command enabled!");
};
