class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
	  return axios.get(`${this.BASE_URL}/characters`)
		  .then(response => {
			  console.log('get success');
			  console.log(response);
			  return response;
		  })
		  .catch(error => {
			  console.log('Oh No! Error!');
			  console.log(error);
			  return Promise.reject(error);
		  });
  }

  getOneRegister(id) {
	  return axios.get(`${this.BASE_URL}/characters/${id}`)
		  .then(response => {
			  console.log('get success');
			  console.log(response);
			  return response;
		  })
		  .catch(error => {
			  console.log('Oh No! Error!');
			  console.log(error);
			  return Promise.reject(error);
		  });
  }

  createOneRegister(characterInfo) {
	  return axios.post(`${this.BASE_URL}/characters`, characterInfo)
		  .then(response => {
			  console.log('post success');
			  console.log(response);
			  return true;
		  })
		  .catch(error => {
			  console.log('Oh No! Error!');
			  console.log(error);
			  return false;
		  });
  }

  updateOneRegister(id, updateInfo) {
	  return axios.patch(`${this.BASE_URL }/characters/${id}`, updateInfo)
		  .then(response => {
			  console.log("Update SUCCESS!");
			  console.log(response);
			  return true;
		  })
		  .catch(error => {
			  console.log('Oh No! Error!');
			  console.log(error);
			  return false;
		  });
  }

  deleteOneRegister(id) {
	  return axios.delete(`${this.BASE_URL}/characters/${id}`)
		  .then(response => {
			  console.log("Delete SUCCESS!");
			  console.log(response);
			  return true;
		  })
		  .catch(error => {
			  console.log('Oh No! Error!');
			  console.log(error);
			  return false;
		  });
  }
}
