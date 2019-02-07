export const checkAuthorization = async (email, password) => {
  const url = `https://kennel-staging.herokuapp.com/api/v1/login?auth[email]=${email}&auth[password]=${password}`;
  const optionsObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };
  const response = await fetch(url, optionsObj);
  return await response.json();
};

export const fetchCall = async url => {
  const response = await fetch(url);
  if (!response.ok) {
    console.error(Error(response.statusText));
    return "failed";
  }
  return await response.json();
};

export const petPost = async (petName, species, breed, color, dob, spayed, medications, feeding, shots) => {
    const token = JSON.parse(localStorage.getItem("token"))
    const requestURL = `http://kennel-staging.herokuapp.com/api/v1/pets`
    const petBody = JSON.stringify({
      "name": petName,
      "species": species,
      "breed": breed,
      "color": color,
      "dob": dob,
      "spayed_neutered": spayed,
      "medications": medications,
      "feeding_instructions": feeding,
      "shots": shots
    })
    const optionsObj = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: petBody,
  }
    console.log(petBody)
    const response = await fetch(requestURL, optionsObj);
    return await response.json();
}

export const ownerPost = async (ownerFn, ownerLn, address, cellNumber, homeNumber, ownerEmail) => {
    const token = JSON.parse(localStorage.getItem("token"))
    const requestURL = `http://kennel-staging.herokuapp.com/api/v1/pets`
    const ownerBody = JSON.stringify({
      "first_name": ownerFn,
      "last_name": ownerLn,
      "address": address,
      "home_phone": homeNumber,
      "cell_phone": cellNumber,
      "email": ownerEmail 
    })
    const optionsObj = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: ownerBody,
  }
  console.log(ownerBody)
    const response = await fetch(requestURL, optionsObj);
    return await response.json();
}

export const vetPost = async (practiceName, vetName, vetAddress, vetPhone, vetEmail) => {
    const token = JSON.parse(localStorage.getItem("token"))
    const requestURL = `http://kennel-staging.herokuapp.com/api/v1/pets`
    const vetBody = JSON.stringify({
      "practice_name": practiceName,
      "vet_name": vetName,
      "address": vetAddress,
      "phone": vetPhone,
      "email": vetEmail 
    })
    const optionsObj = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: vetBody,
  }
  console.log(vetBody)
    const response = await fetch(requestURL, optionsObj);
    return await response.json();
}

export const reservationPost = async () => {
    const token = JSON.parse(localStorage.getItem("token"))
    const requestURL = `http://kennel-staging.herokuapp.com/api/v1/pets`
    const vetBody = JSON.stringify({
      "pet_id": "1",
      "owner_id": "1",
      "run_number": "1",
      "checkin": "2019-02-03",
      "checkout": "2019-02-14",
      "grooming": "true",
      "daycare": "false",
      "boarding": "true"
    })
    const optionsObj = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: vetBody,
  }
  console.log(vetBody)
    const response = await fetch(requestURL, optionsObj);
    return await response.json();
}