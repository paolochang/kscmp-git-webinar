import * as fs from "fs";

export const writeTextfile = (data) => {
  fs.writeFile("Output.txt", data, function (err) {
    if (err) return console.log(err);
    console.log("Output.txt is written successfully");
  });
};
