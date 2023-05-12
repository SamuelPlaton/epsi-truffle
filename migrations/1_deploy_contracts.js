const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const SamuelitoToken = artifacts.require("SamuelitoToken")
const SamuelitoItem = artifacts.require("SamuelitoItem")

module.exports = function(deployer) {
  //deployer.deploy(ConvertLib);
  //deployer.link(ConvertLib, SamuelitoToken);
  //deployer.deploy(SamuelitoToken);
  deployer.deploy(SamuelitoItem);
};
