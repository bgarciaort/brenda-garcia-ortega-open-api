fetch('https://api.github.com/users/bgarciaort/repos')  
   .then(response => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json(); 
  })
  .then(data => {
    const repositories = data;
    console.log(repositories); 
    const projectSection = document.getElementById('myProjects'); 
    const projectList = projectSection.querySelector('ul');

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement('li'); 
      project.innerText = repositories[i].name; 
      projectList.appendChild(project); 
    }
  })
  .catch(error => {
    console.error('An error occurred:', error);
    const projectSection = document.getElementById('myProjects');
    const errorMessage = document.createElement('p');
    errorMessage.innerText = 'Could not load projects. Please try again later.';
    projectSection.appendChild(errorMessage); 
  });
