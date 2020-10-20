const fs = require("fs");
const { Shop, Contact } = require("./models");

const write = (data, entity) => {
  const FILE_PATH = `${__dirname}/${entity}.csv`;
  let mappedData;
  let toUpload;

  if (entity === "shops") {
    mappedData = Object.assign(Shop, data);
    toUpload = `\n${mappedData.id},${mappedData.shopName}`;
  }

  if (entity === "contacts") {
    mappedData = Object.assign(Contact, data);
    toUpload = `\n${mappedData.id},${mappedData.firstName},${mappedData.lastName}`;
  }

  const exist = searchBy(mappedData.id, entity).length > 0;

  if (!exist) {
    fs.appendFile(FILE_PATH, toUpload, "utf8", () => {
      console.log(`${entity} file updated successfully!`);
    });
  } else {
    console.log("Already exist!");
  }
};

const read = (entity) => {
  const FILE_PATH = `${__dirname}/${entity}.csv`;
  const data = fs.readFileSync(FILE_PATH, "utf8");
  const dataArray = data.split(/\r?\n/);

  return dataArray
    .map((row) => {
      if (row !== "") {
        const splittedRow = row.split(",");

        if (entity === "contacts") {
          return JSON.parse(
            JSON.stringify(
              new Contact(splittedRow[0], splittedRow[1], splittedRow[2])
            )
          );
        }

        if (entity === "shops") {
          return JSON.parse(
            JSON.stringify(new Shop(splittedRow[0], splittedRow[1]))
          );
        }
      }
    })
    .filter((element) => element !== undefined)
    .slice(1);
};

const count = (entity) => {
  const FILE_PATH = `${__dirname}/${entity}.csv`;
  const data = fs.readFileSync(FILE_PATH, "utf8");

  const dataArray = data.split(/\r?\n/);
  const totalCount = dataArray
    .filter((row) => row !== undefined || row !== "")
    .slice(1).length;

  return totalCount;
};

const searchBy = (finder, entity, field = "id") => {
  const data = read(entity);
  return data.filter((row) => row[field] == finder);
};

module.exports = {
  write,
  read,
  count,
  searchBy,
};
