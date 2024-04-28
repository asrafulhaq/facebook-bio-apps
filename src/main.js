const fb_add = document.querySelector(".fb-bio-add");
const fb_edit = document.querySelector(".fb-bio-edit");
const fb_show = document.querySelector(".fb-bio-show");

const bio_add_bn = document.getElementById("bio-add");
const bio_edit_bn = document.getElementById("bio-edit");
const bio_cancel_bn = document.getElementById("bio-cancel");
const bio_save_bn = document.getElementById("bio-save");

const bio_content = document.getElementById("bio-content");
const remain = document.getElementById("remain");
const bio_data = document.getElementById("bio-data");

// get bio
const getBioData = () => {
  const data = localStorage.getItem("bio");

  if (data) {
    fb_add.style.display = "none";
    fb_edit.style.display = "none";
    fb_show.style.display = "block";
    bio_data.innerHTML = data;
  } else {
    fb_add.style.display = "block";
    fb_edit.style.display = "none";
    fb_show.style.display = "none";
  }
};

getBioData();

// bio add btn action
bio_add_bn.onclick = () => {
  fb_add.style.display = "none";
  fb_edit.style.display = "block";
};

// bio add btn action
bio_cancel_bn.onclick = () => {
  getBioData();
};

// textarea keyup actions
bio_content.onkeyup = () => {
  bio_length = bio_content.value.length;
  const remainLength = 101 - bio_length;

  if (remainLength <= 0) {
    alert("Data Sesss");
  }
  remain.innerHTML = `${remainLength} characters remaining`;
};

// bio save actions
bio_save_bn.onclick = () => {
  localStorage.setItem("bio", bio_content.value);
  getBioData();
};

// bio Edit
bio_edit_bn.onclick = () => {
  const oldBio = localStorage.getItem("bio");

  bio_content.value = oldBio;
  const remainLength = 101 - oldBio.length;

  remain.innerHTML = `${remainLength} characters remaining`;

  fb_edit.style.display = "block";
  fb_show.style.display = "none";
};
