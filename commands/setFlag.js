exports.run = (message, bot, send) => {
  if (!message.args[0]) return send("**Proudly display a flag on your profile**");
  let flag = message.args[0]
  if (flag > 9) return send("**flag emojis are only 9 characters long :flag_xx:**");
  if (!/^:flag_\w\w:$/.test(flag) return send("no");
  //We need to build a folder containing every single flag image
  bot.profile.setFlag(message.author.id, message.suffix);
  send("**Your flag was set to: **\n" + message.suffix)
}

exports.conf = {
  userPerm: [],
  botPerm: ["SEND_MESSAGES"],
  coolDown: 0,
  dm: false,
  category: "Social",
  help: "Set a flag on your profile.",
  args: "",
}
