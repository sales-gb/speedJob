const frontendList = document.querySelector(".frontend-list");
const backtendList = document.querySelector(".backend-list");

function listFrontend(list, dad) {
  for (let i = 0; i < list.length; i++) {
    let cardInfo = list[i];

    let cardsList = templateCards(cardInfo);
    dad.appendChild(cardsList);
  }
}
listFrontend(frontEndJobs, frontendList);

function listBackend(list, dad) {
  for (let i = 0; i < list.length; i++) {
    let cardInfo = list[i];

    let cardsList = templateCards(cardInfo);
    dad.appendChild(cardsList);
  }
}
listBackend(backEndJobs, backtendList);

function templateCards(card) {
  let title = card.title;
  let local = card.location;
  let desc = card.descrription;
  let jobModality1 = card.modality[0];
  let jobModality2 = card.modality[1];

  let tagLi = document.createElement("li");
  let divJobInfo = document.createElement("div");
  let letterJob = document.createElement("h2");
  let divJobTitle = document.createElement("div");
  let jobTitle = document.createElement("h3");
  let jobLocation = document.createElement("span");
  let tagDesc = document.createElement("p");
  let divModality = document.createElement("div");
  let modality1 = document.createElement("span");
  let modality2 = document.createElement("span");

  tagLi.classList.add("jobs-content");
  divJobInfo.classList.add("job-info");
  divJobTitle.classList.add("job-title");
  divModality.classList.add("job-modality");

  letterJob.innerText = "G";
  jobTitle.innerText = title;
  jobLocation.innerText = local;
  tagDesc.innerText = desc;
  modality1.innerText = jobModality1;
  modality2.innerText = jobModality2;

  divJobTitle.append(jobTitle, jobLocation);
  divJobInfo.append(letterJob, divJobTitle);
  divModality.append(modality1, modality2);

  tagLi.append(divJobInfo, tagDesc, divModality);

  return tagLi;
}

const frontSection = document.querySelector(".cards-frontend");
const backSection = document.querySelector(".cards-backend");

const btnFront = document.querySelectorAll(".btn-front");
const btnBack = document.querySelectorAll(".btn-back");

btnFront.forEach((button) => {
  button.addEventListener("click", () => {
    if (backSection.classList.contains("show")) {
      backSection.classList.remove("show");
    } else {
      backSection.classList.add("show");
    }
  });
});

btnBack.forEach((button) => {
  button.addEventListener("click", () => {
    if (frontSection.classList.contains("show")) {
      frontSection.classList.remove("show");
    } else {
      frontSection.classList.add("show");
    }
  });
});
