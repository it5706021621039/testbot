const client = new line.Client({
  channelAccessToken: '1520004907'
});

const message = {
  type: 'text',
  text: 'Hello World!'
};

client.replyMessage('kCz7tuLk8Ox8ptZvYvLn0tB5dIZKkfQwFceq5SVNVlst6gkBC5R6N8pnxEcyp4oZASv1VeAMXO9d7zgx7FHV53qViU7G/4V1lRdTbFvg7aDxHNTFLDZYKBXO2STB6FhrYU07LyObdn3rQ14qbxe1kAdB04t89/1O/w1cDnyilFU=', message)
  .then(() => {

  })
  .catch((err) => {
    // error handling
  });