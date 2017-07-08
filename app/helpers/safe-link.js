import Ember from 'ember';

export function safeLink(params/*, hash*/) {
  const repo = params[0];

  const linkTag = document.createElement('a');
  const strongTag = document.createElement('strong');

  linkTag.target = "_blank";
  linkTag.href   = repo.html_url;
  linkTag.rel    = 'noopener noreferrer';

  const textNode = document.createTextNode(repo.full_name);
  strongTag.appendChild(textNode);
  linkTag.appendChild(strongTag);

  return linkTag;
}

export default Ember.Helper.helper(safeLink);
