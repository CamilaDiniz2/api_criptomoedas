const apiKey = {
  key: 'f0dd7571-5b87-488b-8937-78f102b9fa50',
};
fetch(
  'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
    apiKey.key
)
  .then((response) => {
    if (!response.ok)
      throw new Error(
        'Erro ao executar a requisição, status' + response.status
      );
    return response.json();
  })
  .then((api) => {
    let text = '';
    console.log(api);
    for (let i = 0; i < 12; i++) {
      text =
        text +
        `
        <div class="d-flex align-items-center justify-content-around media col-6 col-md-3 p-2 pl-4 m-1 bg-secondary text-white rounded">
          <span class="material-icons pr-2">
            monetization_on
          </span>
          <div class="media-body pt-3 pr-1 mx-auto" >
            <h5>${api.data[i].name}</h5>
            <p>${api.data[i].symbol}</p>
          </div>
        </div>
        `;

      document.getElementById('coins').innerHTML = text;
    }
  })
  .catch((err) => {
    console.error(error.message);
  });
