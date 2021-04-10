const ENDPOINT = 'https://api.valentinog.com/api/link/';
const SLEEPY = 'https://api.valentinog.com/demo/sleep/';

export function gerLinks(timeout) {
  const controller = new AbortController();
  const {signal} = controller;
  setTimeout(() => controller.abort(), timeout);
  return fetch(ENDPOINT, {signal}).then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  });
}
