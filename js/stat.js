'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_GAP = 10;
var GAP = 50;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  return Math.max.apply(null,arr);
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + TEXT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + TEXT_HEIGHT * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var blueSaturation = 0.3 + Math.random() * 0.7;

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - TEXT_HEIGHT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + TEXT_HEIGHT * 3 + MAX_BAR_HEIGHT - (MAX_BAR_HEIGHT * times[i]) / maxTime)

    if (names[i] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + blueSaturation + ')';
    };

    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + TEXT_HEIGHT * 4 + MAX_BAR_HEIGHT - (MAX_BAR_HEIGHT * times[i]) / maxTime , BAR_WIDTH, (MAX_BAR_HEIGHT * times[i]) / maxTime);
  }
};
