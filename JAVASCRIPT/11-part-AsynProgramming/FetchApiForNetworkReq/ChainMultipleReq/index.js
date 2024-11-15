async function fetchUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    // Step 2: After fetching users, fetch details for each user
    for (const user of users) {
      const userDetails = await fetchUserDetails(user.id);
      console.log(`User-Details:`, userDetails);
    }
  } catch (error) {
    console.error(error);
  }
}

async function fetchUserDetails(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const userDetails = await response.json();
    return userDetails;
  } catch (error) {
    console.error(error);
  }
}
// fetchUserDetails(1);

fetchUser();
