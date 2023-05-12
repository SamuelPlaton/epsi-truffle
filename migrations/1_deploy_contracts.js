const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const SamuelitoToken = artifacts.require("SamuelitoToken")

module.exports = function(deployer) {
  //deployer.deploy(ConvertLib);
  //deployer.link(ConvertLib, SamuelitoToken);
  deployer.deploy(SamuelitoToken);
};
