const request = function (url, onComplete) {
  const request = new XMLHttpRequest();
  request.open('GET', url);

  request.addEventListener('load', () => {
    if (request.status !== 200) return;
    const data = JSON.parse(request.responseText);
    onComplete(data);
  })

  request.send();
}

export default request;
