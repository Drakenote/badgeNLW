
    const linksSocialMedia= {
      github : "drakenote",
      youtube : "UCmkDtAbwu1CUlRl7Fbx3wIg",
      facebook : "Drakenote",
      instagram : "lucasc_maia",
      twitter : "lucasmaia7"
    }
    
    function changeSocialMediaLinks(){
     
      for(let li of socialLinks.children) {
        const social = li.getAttribute("class")

        li.children[0].href=`https://${social}.com/${linksSocialMedia[social]}`
      }
      
    }

    changeSocialMediaLinks()

    function getGitHubProfileInfos () {

    const url = `https://api.github.com/users/${linksSocialMedia.github}`

      fetch(url)
        .then(response => response.json())
        .then(data=> {
          userName.textContent = data.name
          userBio.textContent = data.bio
          usergithub.href = data.html_url 
          userimage.src = data.avatar_url
          userLogin.textContent = data.login
        }
          )
    }
  
    getGitHubProfileInfos ()