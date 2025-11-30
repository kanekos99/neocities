const cubism4Model = "./model/catnekos_model/catnekos_model.model3.json";

(async function main() {
  const live2dapp = new PIXI.Application({
    view: document.getElementById("canvas"),
    autoStart: true,
    backgroundAlpha: 0,
  });

  const model4 = await PIXI.live2d.Live2DModel.from(cubism4Model);
  live2dapp.stage.addChild(model4);

  const modelWidth = model4.width;
  const modelHeight = model4.height;

  live2dapp.renderer.resize(modelWidth, modelHeight);

  model4.scale.set(1);
  model4.x = 0;
  model4.y = 0;
})();
