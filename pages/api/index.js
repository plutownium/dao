// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const apiURL = process.env.BACKEND_API_ROUTE;

export function getAllProjects() {
  let apiToGetAllProjects = apiURL + "/viewAllProjects";
  fetch(apiToGetAllProjects).then((response) => {
    return response;
  });
}

export function createProject(name, description, transactionId) {
  let apiToCreateProject = apiURL + "/project/" + name;
  let data = {
    description: description,
    transactionId: transactionId,
  };
  fetch(apiToCreateProject, data).then((response) => {
    if (response && response.status === 200) {
      return response;
    } else {
      console.log("error detected", response);
    }
  });
}

export function editProject(name, description) {
  // what other metadata will the edit function be able to edit?
  let apiForEditProject = apiURL + "/project?name=" + name;
  let data = {
    description: description,
  };
  fetch(apiForEdit, data).then((response) => {
    // TODO: send an "ok! done" message to the frontend
  });
}

export function deleteProject(projectId, name, authorizationPhrase) {
  let apiForDeleteProject = apiURL + "/project/" + projectId;
  let data = {
    name: name,
    authorizationPhrase: authorizationPhrase, // like what GitHub does to make you delete a project. "type in the name"
  };
  fetch(apiForDeleteProject, data).then((response) => {
    // TODO: send an "ok! done" message to the frontend
  });
}
