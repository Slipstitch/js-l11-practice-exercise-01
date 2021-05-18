const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector(".num-users");

const getData = async function (numUsers) {
	const usersRequest = await fetch (
	`https://randomuser.me/api?results=${numUsers}`);
	const data = await usersRequest.json();
    //console.log(usersRequest);
    const userResults = data.results; //array of objects
    //console.log(userResults); //make sure grabbed right data
    displayUsers(userResults);
};
getData(1);

const displayUsers = function (userResults) {
	randomFolks.innerHTML = "";
	//empty element contents to avoid duplicate DOM elements
	//loop over userResults
	for (const user of userResults) {
		const country = user.location.country;
		const name = user.name.first;
		const imageUrl = user.picture.medium;
		const userDiv = document.createElement("div");
		userDiv.innerHTML = `
		   <h3>${name}</h3>
		   <p>${country}</p>
		   <img src=${imageUrl} alt="User Avatar"/>
		   `; 
		randomFolks.append(userDiv);  
	}

};

selectUserNumber.addEventListener("change", function(e){
  const numUsers = e.target.value;
  getData(numUsers);

});
