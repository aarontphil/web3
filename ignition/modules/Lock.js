const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Token", (m) => {
  const lock = m.contract("Aaron", [
    "0xfaefEC2bbffFB31a102CFe3012DFdbdA8c5EBa1E",]);

  return { lock };
});

