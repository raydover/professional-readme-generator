const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

const generatelicense = (type) => {
  let color;
  if (type === "MIT") color = "grey";
  if (type === "Apache") color = "blue";
  if (type === "MPL") color = "green";
  if (type === "CC") color = "purple";

  return (
    `
  <h3>license</h3>
  <img src="https://img.shields.io/badge/license-${type}-${color}" alt="badge-${type}" height="44" />
  `
  );
};


const generateMarkdown = ({
  title,
  description,
  tableOfContents,
  installation,
  usage,
  license,
  constribution,
  test,
  github,
  email,
}) => {
  console.log("GENERATING PAGE...");
  const template = (
    `
    
    `
  );

};


module.exports = {
  generateMarkdown
};
