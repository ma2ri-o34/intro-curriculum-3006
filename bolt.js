'use strict';
const bolt = require('@slack/bolt');

const app = new bolt.App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: 'debug'
});

const lots = ['大凶', '大吉', '吉', '中吉', '末吉', '凶'];
const lot = lots[Math.floor(Math.random() * lots.length)];

app.message(/おみくじ/i, ({message, say}) => {
  say(`<@${message.user}>, ${lot} です。`);
});

app.start();
