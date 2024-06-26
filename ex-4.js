// Exercise #4
let getJohnProfile = async () => {
  return await new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
// Start coding here
async function getJohnProfileAsync() {
  let johnProfile = await getJohnProfile();
  console.log(johnProfile);
}
getJohnProfileAsync();