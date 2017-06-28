import Ember from 'ember';

export function safeLink(params/*, hash*/) {
  const repo = params[0];

  const linkTag = document.createElement('a');

  linkTag.target = "_blank";
  linkTag.href   = repo.html_url;
  linkTag.rel    = 'noopener noreferrer';

  const textNode = document.createTextNode(repo.name);
  linkTag.appendChild(textNode);

  return linkTag;
}

export default Ember.Helper.helper(safeLink);
