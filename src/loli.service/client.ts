import { credentials } from "grpc";
import { LolisClient } from "../proto/lolis_grpc_pb";
import { AddLoliRequest } from "../proto/lolis_pb";

const lolisClient = new LolisClient(
  "localhost:40000",
  credentials.createInsecure()
);

const addLoliRequest = new AddLoliRequest();
addLoliRequest.setFirstname("Flandre");
addLoliRequest.setLastname("Scarlet");
addLoliRequest.setAge(21);
addLoliRequest.setIslewded(false);

lolisClient.addLoli(addLoliRequest, (err, res) => {
  const loli = res.getLoli();
  console.log(
    `${loli.getFirstname()} ${loli.getLastname()} (${loli.getAge()}) Lewded: ${loli.getIslewded()}`
  );
});
