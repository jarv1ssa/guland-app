import Constans from "expo-constants";
import ImageKit from "imagekit-javascript";

const ik = new ImageKit({
  publicKey: Constans.manifest!.extra!.IK_PUBLIC_KEY as string,
  urlEndpoint: "",
  authenticationEndpoint: "",
});
