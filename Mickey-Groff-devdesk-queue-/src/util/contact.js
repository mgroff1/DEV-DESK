
const endpoint = "https://formspree.io/mzbdwoob";

function submit(data) {
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(r => r.json());
}

export default { submit };
