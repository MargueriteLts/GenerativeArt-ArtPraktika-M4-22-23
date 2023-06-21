const APIController = (function() {

  const client_id = '9110063db2ef4860bb58399b82607e0b';
  const client_secret = '18f62a34f5a44553847361427c3b2f0f';

  const getToken = async () => {
    const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic'+ (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
        // 'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
      },
      body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    return data.access_token;
  }

  const getTrack = async (token,trackEndPoint) => {
    const result = await fetch(`${trackEndPoint}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer'+ token
      }
    });
    const data = await result.json();
    return data;
  }

})();


const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    const token = body.access_token;
  }
});

fetch(url, {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        updatePalette(data.result)
      })
      .catch((error) => {
        console.error('Error:', error)
      })