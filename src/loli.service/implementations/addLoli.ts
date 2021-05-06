import { AddLoliRequest, AddLoliResponse, Loli } from "../../proto/lolis_pb";

export const addLoli = (loliRequest: AddLoliRequest): AddLoliResponse => {
  const loliResponse = new AddLoliResponse();

  const loli = new Loli();

  loli.setId("1");
  loli.setFirstname(loliRequest.getFirstname());
  loli.setLastname(loliRequest.getLastname());
  loli.setAge(loliRequest.getAge());
  loli.setIslewded(loliRequest.getIslewded());

  loliResponse.setLoli(loli);

  return loliResponse;
};
