const nav = document.getElementById('nav');
const curretPage = document.getElementById('currentPage').value;

const renderNavItem = () => {
  const navList = [{
    name: 'Home',
    href: './Index.html',
    published: true,
  },{
    name: '要件定義書',
    href: './RequirementDefinition.html',
    published: true,
  }, {
    name: '基本設計書',
    href: './Design.html',
    published: true,
  }, {
    name: 'WIKI',
    href: '#',
    published: false,
  }];

  const currentPage = document.getElementById('currentPage').value;
  const currentObject = navList.find(x =>x.name === currentPage);

  const result = navList.map(x => {
    const isCurrent = currentObject.name === x.name;
    return `
    <li class="nav-item ${isCurrent ? 'active' : ''}">
      <a class="nav-link ${x.published ? '': 'disabled'}" href="${x.href}">${x.name}
        <span class="sr-only">${isCurrent ? '(current)' : x.name}</span>
      </a>
    </li>
    `;
  }).join('');

  return result;
}


nav.innerHTML = `
<a class="navbar-brand" href="#">Menu</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
  aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    ${renderNavItem()}
  </ul>
</div>
`