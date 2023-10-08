import * as fs from "fs";
import { get, request } from "https";
import { join } from "path";
import tar from "tar";

const main = async () => {
  console.log("# clearing folders!");

  console.log("## clearing docs");
  let docs_path = join(__dirname, "../docs");
  fs.rmSync(docs_path, { recursive: true });
  fs.mkdirSync(docs_path);

  console.log("# creating temp dir");
  let temp_dir = join(__dirname, "../temp");
  fs.mkdirSync(temp_dir);
  console.log("## fetch archive and unpack");
  let archive = join(temp_dir, "/archive.tar.gz");

  let url =
    "https://github.com/WayOfTime/BloodMagic/archive/refs/heads/1.20.1.tar.gz";

  let promise = () =>
    new Promise((resolve, _) => {
      request(url, (res) => {
        let file = fs.createWriteStream(archive);
        res.pipe(file);
        file.on("finish", () => {
          file.close(() => {
            console.log("### archive downloaded");
            resolve(null);
          });
        });
      });
    });
  await promise();

  // fs.createReadStream(archive).pipe(
  //   tar.x({
  //     strip: 1,
  //     C: temp_dir,
  //   })
  // );
  // console.log("### archive unzipped");
  // console.log("# clean temp dir");
  // fs.rmdirSync(temp_dir, { recursive: true });
};

main();
