const linksSocialMedia = {
  github: 'mizaell',
  youtube: 'jakelinygracielly',
  facebook: 'mizael.lima.184',
  instagram: '_el_miza',
  twitter: 'MizaelLimadaSi1'
}

/*DOM Document Object Model, Modelo de documento do objeto*/

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    // alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })

  //alert(userName)
}

getGitHubProfileInfos()

//ARROW FUNCTIONS
/*function nomedaFuncao(arg) {}
contraida
arg => {}

function nomedaFuncao(arg, arg2) {}
contraida
(arg, arg2) => {}

function nomedaFuncao() {}
contraida
() => {}*/
