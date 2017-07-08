export default function github(term) {
  if (term) {
    return `https://api.github.com/search/repositories` +
           `?q=${term}&order=desc&per_page=7`;
  }
}
