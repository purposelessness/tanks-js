import gameManager from './managers/game-manager.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

gameManager.canvas = canvas;
gameManager.ctx = ctx;

gameManager.load();
gameManager.play();