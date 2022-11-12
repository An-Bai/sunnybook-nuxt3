module.exports = {
  apps: [
    {
      name: "sunnybook",
      exec_mode: "cluster",
      instances: "max",
      script: "./server/index.mjs",
    },
  ],
};
