export default function loadBalancer(chinaDownload, USDownload) {
  // Create a Promise that resolves or rejects as soon as one of the input Promises settles
  return Promise.race([chinaDownload, USDownload]);
}
