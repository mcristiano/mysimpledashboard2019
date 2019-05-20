import "./styles.css";

function ok() {
  console.log("here is undefined, ok!", this);
}

function toggleSidebar() {
  console.log(this);
  document.querySelector("#sidebar").classList.toggle("active");
}

ok();

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use Parcel to bundle this sandbox, you can find more info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
